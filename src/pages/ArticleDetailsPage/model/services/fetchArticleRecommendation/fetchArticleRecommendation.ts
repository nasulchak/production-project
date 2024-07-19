import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticleRecommendation = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articles/fetchArticleRecommendation', async (props, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _limit: 4,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('Введен неверный логин или пароль');
    }
});
