import { useEffect, useState } from 'react';
import { useChatStore } from '../store/chatStore';

export const useDebouncedTyping = () => {
  const { setTypingRole } = useChatStore();
  const [value, setValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setTypingRole(value ? 'user' : null);
    }, 300);

    return () => clearTimeout(handler);
  }, [value, setTypingRole]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  };

  const resetValue = () => setValue('');

  return { value, handleOnChange, resetValue };
};
