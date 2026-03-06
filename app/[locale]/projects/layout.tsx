import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | Omar Al-Ghafri",
    description: "A showcase of complete mobile & web applications created by Omar Al-Ghafri."
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
