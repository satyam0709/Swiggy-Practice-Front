// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       {[...Array(10)].map((_, index) => (
//         <div className="shimmer-card" key={index}>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shimmer;

const Shimmer = ({ count = 100 }) => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: count }).map((_, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;


