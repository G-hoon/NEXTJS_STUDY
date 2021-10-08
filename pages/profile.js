import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
    const followingList = [{ 'nickname': 'qwer'}, { 'nickname': 'rrrr'}, { 'nickname': 'tttt'}];
    const followerList = [{ 'nickname': 'asdf'}, { 'nickname': 'ssss'}, { 'nickname': 'zzzzz'}];
    return (
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={followingList} />
            <FollowList header="팔로워 목록" data={followerList} />
        </AppLayout>
    );
}

export default Profile;