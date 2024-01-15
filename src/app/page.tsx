import AxiosRequestExample from '@/components/axios-request-example';
import FetchRequestExample from '@/components/fetch-request-example';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <FetchRequestExample /> */}

      <AxiosRequestExample />
    </main>
  );
}
