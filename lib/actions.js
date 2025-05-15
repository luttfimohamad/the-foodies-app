'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

// alasan menggunakan 'use server' adalah karena kita ingin menggunakan server action
// untuk mengirim data ke server

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
  const meals = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meals.title) ||
    isInvalidText(meals.summary) ||
    isInvalidText(meals.instructions) ||
    isInvalidText(meals.creator) ||
    isInvalidText(meals.creator_email) ||
    !meals.creator_email.includes('@') ||
    !meals.image ||
    meals.image.size == 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveMeal(meals);
  revalidatePath('/meals');
  redirect('/meals');
}
