import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'app/entities/Article';

export interface ArticlePageSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
}
