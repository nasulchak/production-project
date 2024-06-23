import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

interface ProfilePageProps {
    className?: string;
}

const initReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
