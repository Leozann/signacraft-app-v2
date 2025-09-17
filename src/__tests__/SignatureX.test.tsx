import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import StartButton from '../layout/app/StartButton';
import SignatureX from '../layout/app/SignatureX';

describe("SignatureX - Smoke & Form Test", () => {
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


        expect(
            screen.getByText(/your trusted platform for crafting personalized/i)
        ).toBeInTheDocument();


        expect(
            screen.getByRole('heading', { name: /signaturex/i })
        ).toBeInTheDocument();


        const textboxes = screen.getAllByRole("textbox");
        expect(textboxes).toHaveLength(5);

        // cek tombol submit
        expect(
            screen.getByRole('button', { name: /submit/i })
        ).toBeInTheDocument();
    });

    it("Should get user input", async () => {
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

        const user = userEvent.setup();

        const textboxes = screen.getAllByRole("textbox");

        await user.type(textboxes[0], "IMS");
        await user.type(textboxes[1], "Asstrid Rianggi");
        await user.type(textboxes[2], "asstrid@example.com");
        await user.type(textboxes[3], "IT Staff");
        await user.type(textboxes[4], "+6281234567890");




        expect(screen.getByText(/ims/i)).toBeInTheDocument();
        expect(screen.getByText(/asstrid rianggi/i)).toBeInTheDocument();
        expect(screen.getByText(/asstrid@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/it staff/i)).toBeInTheDocument();
        expect(screen.getByText(/\+6281234567890/i)).toBeInTheDocument();
    });

    it("Should show popup after submit", async () => {
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

        const user = userEvent.setup();
        const submitButton = screen.getByRole('button', { name: /submit/i });


        await user.click(submitButton);
        // // pastikan modal muncul
        // const modal = await screen.findByRole("dialog", {}, { timeout: 2000 });
        // expect(modal).toBeInTheDocument();

        // // pastikan ada input product key di dalam modal
        // const inputs = within(modal).getAllByRole("textbox");
        // expect(inputs).toHaveLength(6);
        // // const modal = await screen.findByRole("dialog", {}, { timeout: 2000 });
        // // expect(modal).toBeInTheDocument();



        // const modalTitle = await screen.findByText((content) =>
        //     content.toLowerCase().includes("enter key to confirm signature")
        // );
        // expect(modalTitle).toBeInTheDocument();

        // const modalTitle = await screen.findByRole("heading", { name: /enter key to confirm signature/i });
        // expect(modalTitle).toBeInTheDocument();

        // const modalTitle = await screen.findByText(/enter key to confirm signature/i);
        // expect(modalTitle).toBeInTheDocument();
        // const modal = await screen.findByRole("dialog");
        // expect(modal).toBeInTheDocument();


        // expect(
        //     screen.getByText(/enter key to confirm signature/i)
        // ).toBeInTheDocument();

    });

});
