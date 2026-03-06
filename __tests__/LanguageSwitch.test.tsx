import { render, screen, fireEvent } from '@testing-library/react';
import ApplicationPreviewSection from '../components/ApplicationPreviewSection';
import WebsitePreviewSection from '../components/WebsitePreviewSection';

// Mock useTranslations and useLocale
jest.mock('next-intl', () => ({
    useTranslations: () => (key: string) => key,
    useLocale: () => 'ar',
}));

describe('Language Switching Logic', () => {
    beforeEach(() => {
        // Clear localStorage before each test
        window.localStorage.clear();
    });

    it('should set cardio_website_lang to ar in localStorage when locale is ar', () => {
        render(<WebsitePreviewSection />);
        expect(window.localStorage.getItem('cardio_website_lang')).toBe('ar');
    });

    it('should query the correct iframe src based on language state', () => {
        render(<WebsitePreviewSection />);
        const iframe = screen.getByTitle('Cardio Website Preview');
        expect(iframe).toHaveAttribute('src', '/websites/cardio/login.html');
    });

    it('switches application iframes correctly without reload', () => {
        render(<ApplicationPreviewSection />);
        const cardioButton = screen.getByText('cardio_ai');
        const flutterButton = screen.getByText('flutter_app');

        expect(screen.getByTitle('Cardio AI Preview')).toHaveClass('opacity-100');

        // Switch to flutter
        fireEvent.click(flutterButton);
        expect(screen.getByTitle('Flutter App Preview')).toBeInTheDocument();
        expect(screen.getByTitle('Flutter App Preview')).toHaveClass('opacity-100');
        expect(screen.getByTitle('Cardio AI Preview')).toHaveClass('opacity-0');
    });
});
