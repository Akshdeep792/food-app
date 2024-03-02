'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"
const isInvalidText = (text) => {
    return !text || text.trim() === ''
}

const shareMeal = async (prevState, formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }
    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: 'Invalid Inputs'
        }
    }

    await saveMeal(meal)
    revalidatePath('/meals', 'layout') //only main path will be revalidated but no nested path use layout than nested pages will be revalidated
    redirect('/meals')

}
export default shareMeal