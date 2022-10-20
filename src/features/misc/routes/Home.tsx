import { ContentLayout, MainLayout } from '@/components/Layout';
import { NavigationBar } from '@/components/NavigationBar/NavigationBar';
export const Home = () => {
  return (
    <MainLayout>
    <ContentLayout title="Fallout Cinema">
      <h1 className="text-xl mt-2">
        Welcome <b>User</b>
      </h1>
    </ContentLayout>
    </MainLayout>
  );
};
