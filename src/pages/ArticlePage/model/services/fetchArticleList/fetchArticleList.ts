import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'app/entities/Article';

export const fetchArticleList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'articlePage/fetchArticleList',
        async (articleId, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'admin',
                    },
                });

                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (e) {
                console.log(e);
                console.log('fetchArticles');
                return rejectWithValue('error');
            }
        },
    );
