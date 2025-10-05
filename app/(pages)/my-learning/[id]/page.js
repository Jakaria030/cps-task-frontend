import MyModules from "@/app/components/MyModules";

const MyLearningCoursePage = ({ params }) => {
  const { id } = params;
  return <MyModules courseId={id} />;
};

export default MyLearningCoursePage;
