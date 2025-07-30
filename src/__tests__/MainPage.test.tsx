import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import StartButton from '../layout/app/StartButton';
import SignatureX from '../layout/app/SignatureX';

describe("MainPage Component — Smoke Test", () => {
    it("Should render main page with content", () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route index element={<StartButton />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        expect(
            screen.getByText(/your trusted platform for crafting personalized/i)
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', { name: /start now/i })
        ).toBeInTheDocument();
    });

    it("Should render SignatureX", () => {
        render(
            <MemoryRouter initialEntries={['/signature']}>
                <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route index element={<StartButton />} />
                        <Route path="signature" element={<SignatureX />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /signaturex/i })).toBeInTheDocument();
    });

    it("Should navigate to SignatureX component", async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route index element={<StartButton />} />
                        <Route path="signature" element={<SignatureX />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );
        const button = screen.getByRole('button', { name: /start now/i });
        await userEvent.click(button);

        expect(screen.getByRole('heading', { name: /signaturex/i })).toBeInTheDocument();
    });
})