import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";

export default function FirstItem({ time }) {
  return (
    <>
      <h2 className="title">First item</h2>
    </>
  );
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
