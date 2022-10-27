import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";

export default function CategorySlug({ time }) {
  return (
    <>
      <h2 className="title">CategorySlug</h2>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
