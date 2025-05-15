'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

// alasan menggunakan 'use server' adalah karena kita ingin menggunakan server action
// untuk mengirim data ke server

export async function shareMeal(formData) {
  const meals = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  await saveMeal(meals);
  redirect('/meals');
}
