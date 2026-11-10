import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_ITEMS = [
    { href: '/resume', label: 'Resume' },
    { href: '/playground', label: 'Playground' },
    { href: '/games', label: 'Games' },
    { href: '/playlists', label: 'Playlists' },
];

const PADDING_X = 8;
const SLIDE = '220ms cubic-bezier(.25, 1, .5, 1)';
const FADE = 'opacity 120ms';

// Moves a single pill behind the hovered / focused / current link. Position
// and width use CSS transitions, so an interrupted slide retargets smoothly
// from where the pill currently is.
const useNavHover = (navRef, pillRef, pathname) => {
    const syncRef = useRef();

    useEffect(() => {
        const nav = navRef.current;
        const pill = pillRef.current;
        if (!nav || !pill) return;

        const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
        const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
        // Read on demand: React updates aria-current on navigation.
        const getCurrent = () => nav.querySelector('a[aria-current]');
        let active;

        const moveTo = (link, animate) => {
            const navRect = nav.getBoundingClientRect();
            const linkRect = link.getBoundingClientRect();
            const x = linkRect.left - navRect.left - PADDING_X;
            const width = linkRect.width + PADDING_X * 2;

            pill.style.transition =
                animate && !reducedMotion.matches
                    ? `transform ${SLIDE}, width ${SLIDE}, ${FADE}`
                    : FADE;
            pill.style.transform = `translateX(${x}px)`;
            pill.style.width = `${width}px`;
            pill.dataset.visible = 'true';
            active = link;
        };

        const reset = (animate) => {
            const focused = nav.querySelector('a:focus-visible');
            const target = focused ?? getCurrent();
            if (target) {
                if (target !== active)
                    moveTo(target, animate && !focused && !!active);
            } else {
                delete pill.dataset.visible;
                active = undefined;
            }
        };

        const onPointerMove = (event) => {
            if (event.pointerType === 'touch' || !finePointer.matches) return;
            const link = event.target.closest('a');
            if (link && link !== active) moveTo(link, !!active);
        };
        const onPointerLeave = () => reset(true);
        const onKeyDown = () => reset(false);
        const onFocusIn = (event) => {
            if (event.target.matches('a:focus-visible'))
                moveTo(event.target, false);
        };
        const onFocusOut = (event) => {
            if (!nav.contains(event.relatedTarget)) reset(false);
        };

        nav.addEventListener('pointermove', onPointerMove);
        nav.addEventListener('pointerleave', onPointerLeave);
        nav.addEventListener('keydown', onKeyDown);
        nav.addEventListener('focusin', onFocusIn);
        nav.addEventListener('focusout', onFocusOut);

        const resizeObserver = new ResizeObserver(() => {
            if (active) moveTo(active, false);
        });
        resizeObserver.observe(nav);

        const current = getCurrent();
        if (current) moveTo(current, false);
        nav.dataset.enhanced = 'true';

        // After a navigation, slide to the new page unless the pointer is
        // still over the nav (the pill already follows it).
        syncRef.current = () => {
            if (!nav.matches(':hover')) reset(true);
        };
        document.fonts?.ready.then(() => active && moveTo(active, false));

        return () => {
            resizeObserver.disconnect();
            syncRef.current = undefined;
            nav.removeEventListener('pointermove', onPointerMove);
            nav.removeEventListener('pointerleave', onPointerLeave);
            nav.removeEventListener('keydown', onKeyDown);
            nav.removeEventListener('focusin', onFocusIn);
            nav.removeEventListener('focusout', onFocusOut);
        };
    }, [navRef, pillRef]);

    useEffect(() => {
        syncRef.current?.();
    }, [pathname]);
};

const Header = () => {
    const { pathname } = useRouter();
    const navRef = useRef(null);
    const pillRef = useRef(null);

    useNavHover(navRef, pillRef, pathname);

    return (
        <header className="site-header">
            <Link href="/" className="site-name">
                Léon Tran-Van
            </Link>
            <nav ref={navRef} aria-label="Main navigation" className="site-nav">
                <span ref={pillRef} aria-hidden="true" className="site-nav-hover" />
                {NAV_ITEMS.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        aria-current={pathname === href ? 'page' : undefined}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
