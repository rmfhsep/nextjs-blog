import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";

export default function Username({ time }) {
  return (
    <>
      <h2 className="title">Username</h2>
    </>
  );
}

Username.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
