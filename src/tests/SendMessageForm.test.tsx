/// <reference types="vitest" />

import { fireEvent, render, screen } from '@testing-library/react';
import { SendMessageForm } from '../components/SendMessageForm';
import { describe, expect, it, vi } from 'vitest';

describe('<SendMessageForm />', () => {

  it('calls addUserMessage with correct value and role', () => {
    const addUserMessage = vi.fn();

    render(<SendMessageForm addUserMessage={addUserMessage} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello AI' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(addUserMessage).toHaveBeenCalledWith('Hello AI', 'user');
  });

  it('resets the input after submitm', () => {
    const addUserMessage = vi.fn();
    render(<SendMessageForm addUserMessage={addUserMessage} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Reset me' } });
    fireEvent.submit(input.closest('form')!);

    expect(input).toHaveValue('');
  })
});
