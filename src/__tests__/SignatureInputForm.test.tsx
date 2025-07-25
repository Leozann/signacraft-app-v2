import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// describe ... ini test tentang apa?
// it....  ini test harus ngapain?
// expect ... apa yang diharapkan dari test ini?

describe("SignatureInputForm - Smoke Test", () => {
    it("Should render SignatureInputForm with all input fields", () => {
        // function logic for testing

        // expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
    });
    it("Should get user input", () => {
        // function logic for testing

        // expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
    });
});