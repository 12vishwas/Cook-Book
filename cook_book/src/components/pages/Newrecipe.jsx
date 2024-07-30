import React, { useState } from 'react';

export const Newrecipe = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, ingredients, instructions }),
            });

            if (!response.ok) {
                throw new Error('Failed to create recipe');
            }

            // Handle success (e.g., show success message)
            console.log('Recipe created successfully');
        } catch (error) {
            // Handle error (e.g., show error message)
            console.error('Error creating recipe:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                Ingredients:
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />
            </label>
            <label>
                Instructions:
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    required
                />
            </label>
            <button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Recipe'}
            </button>
        </form>
    );
};

export default Newrecipe;
