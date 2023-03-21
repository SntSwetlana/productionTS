import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { fetchNextArticlePage } from './fetchNextrArticlePage';

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 });
    });
    test('fetchNextArticlePage not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
