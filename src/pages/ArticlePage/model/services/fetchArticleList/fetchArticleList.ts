import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'app/entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlePage/model/selectors/articlesPageSelectors';

interface FetchArticleListProps {
    page?: number;
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
    >(
        'articlePage/fetchArticleList',
        async (props, thunkAPI) => {
            const { extra, rejectWithValue, getState } = thunkAPI;
            const { page = 1 } = props;
            const limit = getArticlesPageLimit(getState());
            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'admin',
                        _limit: limit,
                        _page: page,
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
