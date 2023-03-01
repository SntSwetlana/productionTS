import { articleDetailsReducer } from 'app/entities/Article/model/slice/articleDetailsSlice';
import { ArticleDetailsSchema } from 'app/entities/Article';
import { fetchArticleByID } from 'app/entities/Article/model/services/fetchArticleByID/fetchArticleByID';
import { ArticleType } from 'app/entities/Article/model/types/article';

const data = {
    id: '1',
    title: 'title',
    subtitle: 'subtitle',
    img: '',
    views: 0,
    createdAt: '01.01.2023',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'Swetlana',
    },
    blocks: [],
};

describe('articleDetails.test', () => {
    // test extra reducer
    test('test article details slice pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'error',
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleByID.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test article details slice fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleByID.fulfilled(data, '', ''),
        )).toEqual({
            isLoading: false,
            data,
        });
    });
});
