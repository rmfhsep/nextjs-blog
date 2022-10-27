import Layout from "components/Layout";
import SubLayout from "components/SubLayout"; 

export default function MyInfo({ time }) {
  return (
    <>
      <h2 className="title">MyInfo</h2>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
