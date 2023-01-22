import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'app/entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
