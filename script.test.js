/**
 * @jest-environment jsdom
 */

require('@testing-library/jest-dom');

describe('Navigation Menu', () => {
    let hamburger;
    let navMenu;

    beforeAll(() => {
        // Set up the DOM once for all tests
        document.body.innerHTML = `
            <button id="hamburger" aria-expanded="false">&#9776;</button>
            <nav id="nav-menu" class=""></nav>
        `;

        hamburger = document.getElementById('hamburger');
        navMenu = document.getElementById('nav-menu');

        // Require script.js so it attaches the DOMContentLoaded listener to document
        require('./script.js');

        // Trigger DOMContentLoaded so the script adds event listeners to our elements
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    });

    beforeEach(() => {
        // Reset the state of our elements before each test
        navMenu.className = '';
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = '&#9776;';
    });

    test('should open the menu when hamburger is clicked', () => {
        expect(navMenu).not.toHaveClass('active');
        expect(hamburger).toHaveAttribute('aria-expanded', 'false');

        hamburger.click();

        expect(navMenu).toHaveClass('active');
        expect(hamburger).toHaveAttribute('aria-expanded', 'true');
        expect(hamburger.innerHTML).toBe('✕'); // '&#10005;' parses to ✕ in jsdom
    });

    test('should close the menu when hamburger is clicked again', () => {
        hamburger.click(); // Open
        expect(navMenu).toHaveClass('active');

        hamburger.click(); // Close
        expect(navMenu).not.toHaveClass('active');
        expect(hamburger).toHaveAttribute('aria-expanded', 'false');
        expect(hamburger.innerHTML).toBe('☰'); // '&#9776;' parses to ☰ in jsdom
    });

    test('should close the menu when clicking outside of the menu and hamburger', () => {
        hamburger.click(); // Open
        expect(navMenu).toHaveClass('active');

        // Click on the body (outside)
        document.body.click();

        expect(navMenu).not.toHaveClass('active');
        expect(hamburger).toHaveAttribute('aria-expanded', 'false');
        expect(hamburger.innerHTML).toBe('☰');
    });

    test('should NOT close the menu when clicking inside the menu', () => {
        hamburger.click(); // Open
        expect(navMenu).toHaveClass('active');

        // Click inside the navMenu
        navMenu.click();

        expect(navMenu).toHaveClass('active');
        expect(hamburger).toHaveAttribute('aria-expanded', 'true');
    });

    test('should not throw error if elements are missing on DOMContentLoaded', () => {
        // We can test this by temporarily removing elements, triggering the event, and restoring them
        const tempHamburger = hamburger;
        const tempNavMenu = navMenu;

        document.body.innerHTML = ''; // Clear DOM

        expect(() => {
            const event = new Event('DOMContentLoaded');
            document.dispatchEvent(event);
        }).not.toThrow();

        // Restore DOM for other tests if necessary (though this is the last test currently)
        document.body.appendChild(tempHamburger);
        document.body.appendChild(tempNavMenu);
    });
});
