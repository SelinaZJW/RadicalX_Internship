import db from "../../../utils/db";

const handler = async (req, res) => {
  try {
    const { slug } = req.body;
    const internships = await db.collection('internships').get();
    const internshipsData = internships.docs.map(internship => ({
      id: internship.id,
      ...internship.data()
    }));

    res.status(200).json(internshipsData);
  } catch (e) {
    res.status(400).end();
  }
}

export default handler

// function InternshipListPage (props) {
//   const { internshipsData } = props
//   return (
//     <main>
//       {internshipsData}
//       {/* {internshipsData.map(i => <p key={i.id}>{i.title}</p>)} */}
//       {/* <pre>
//       {JSON.stringify(props, null, 2)}
//       </pre> */}
//     </main>
//   )
// }

// export const getStaticProps = async () => {
//   // try {
//   //   const internships = await db.collection('internships').orderBy('created').get();
//   //   const internshipsData = internships.docs.map(internship => ({
//   //     id: internship.id,
//   //     ...internship.data()
//   //   }));
//   //   res.status(200).json({ entriesData });
//   // } catch (e) {
//   //   es.status(400).end();
//   // }

//     const internships = await db.collection('internships').get();
//     console.log("internships", internships)
//     const internshipsData = internships.map(internship => ({
//       id: internship.id,
//       ...internship.data()
//     }));
//     console.log("internships:", internshipsData)

//     return {
//       props: {
//         internshipsData
//       },
//       // revalidate: 600     when to trigger new build generation
//     }
// }

// export default InternshipListPage;