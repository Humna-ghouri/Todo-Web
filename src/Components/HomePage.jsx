// import React from "react";
// import { Box, Typography, Grid, Paper, Button } from "@mui/material";

// const HomePage = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center", // Center horizontally
//         justifyContent: "center", // Center vertically
//         minHeight: "100vh", // Full-screen height
//         padding: 2,
//         backgroundColor: "transparent", // Set background to transparent
//       }}
//     >
//       {/* Center Image */}
//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           marginTop: 4,
//         }}
//       >
//         <img
//           src="https://png.pngtree.com/png-vector/20221024/ourmid/pngtree-tiny-people-signing-legal-principles-document-png-image_6347098.png"
//           alt="Main Illustration"
//           style={{
//             maxWidth: "600px",
//             width: "100%",
//             height: "auto",
//           }}
//         />
//       </Box>

//       {/* Greeting Section */}
//       <Box
//         sx={{
//           width: "100%",
//           maxWidth: "800px",
//           backgroundColor: "white",
//           borderRadius: 2,
//           padding: 3,
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//           textAlign: "center",
//           marginTop: 4,
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: "bold",
//             marginBottom: 2,
//             color: "#333",
//           }}
//         >
//           Hello Garin, What's Up Today?
//         </Typography>
//         <Typography variant="body1" sx={{ color: "#666" }}>
//           Here are some quick actions you can take today:
//         </Typography>
//       </Box>

//       {/* Buttons Section */}
//       <Grid
//         container
//         spacing={3}
//         sx={{
//           marginTop: 4,
//           width: "100%",
//           maxWidth: "800px",
//           justifyContent: "center", // Center buttons horizontally
//         }}
//       >
//         {/* Calendar Button */}
//         <Grid item xs={6} sm={3}>
//           <Paper
//             elevation={3}
//             sx={{
//               padding: 3,
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.2s",
//               "&:hover": {
//                 transform: "scale(1.05)",
//                 boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
//               },
//             }}
//           >
//             <Button
//               variant="text"
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center", // Center content vertically
//                 textTransform: "none",
//                 color: "#333",
//                 height: "100%", // Make button take full height of Paper
//                 width: "100%", // Make button take full width of Paper
//               }}
//             >
//               <img
//                 src="https://img.icons8.com/ios/100/calendar--v1.png" // Increased size
//                 alt="Calendar Icon"
//                 style={{ width: "60px", marginBottom: "8px" }} // Adjusted size
//               />
//               <Typography>Calendar</Typography>
//             </Button>
//           </Paper>
//         </Grid>

//         {/* Schedule Button */}
//         <Grid item xs={6} sm={3}>
//           <Paper
//             elevation={3}
//             sx={{
//               padding: 3,
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.2s",
//               "&:hover": {
//                 transform: "scale(1.05)",
//                 boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
//               },
//             }}
//           >
//             <Button
//               variant="text"
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center", // Center content vertically
//                 textTransform: "none",
//                 color: "#333",
//                 height: "100%", // Make button take full height of Paper
//                 width: "100%", // Make button take full width of Paper
//               }}
//             >
//               <img
//                 src="https://img.icons8.com/ios/100/planner.png" // Increased size
//                 alt="Schedule Icon"
//                 style={{ width: "60px", marginBottom: "8px" }} // Adjusted size
//               />
//               <Typography>Schedule</Typography>
//             </Button>
//           </Paper>
//         </Grid>

//         {/* Daily Task Button */}
//         <Grid item xs={6} sm={3}>
//           <Paper
//             elevation={3}
//             sx={{
//               padding: 3,
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.2s",
//               "&:hover": {
//                 transform: "scale(1.05)",
//                 boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
//               },
//             }}
//           >
//             <Button
//               variant="text"
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center", // Center content vertically
//                 textTransform: "none",
//                 color: "#333",
//                 height: "100%", // Make button take full height of Paper
//                 width: "100%", // Make button take full width of Paper
//               }}
//             >
//               <img
//                 src="https://img.icons8.com/ios/50/todo-list.png"
//                 alt="Daily Task Icon"
//                 style={{ width: "40px", marginBottom: "8px" }}
//               />
//               <Typography>Daily Task</Typography>
//             </Button>
//           </Paper>
//         </Grid>

//         {/* Setting Button */}
//         <Grid item xs={6} sm={3}>
//           <Paper
//             elevation={3}
//             sx={{
//               padding: 3,
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.2s",
//               "&:hover": {
//                 transform: "scale(1.05)",
//                 boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
//               },
//             }}
//           >
//             <Button
//               variant="text"
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center", // Center content vertically
//                 textTransform: "none",
//                 color: "#333",
//                 height: "100%", // Make button take full height of Paper
//                 width: "100%", // Make button take full width of Paper
//               }}
//             >
//               <img
//                 src="https://img.icons8.com/ios/50/settings.png"
//                 alt="Setting Icon"
//                 style={{ width: "40px", marginBottom: "8px" }}
//               />
//               <Typography>Setting</Typography>
//             </Button>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// // export default HomePage;



// import React from 'react';
// import { Navbar, Nav, Form, FormControl, Button, Card, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faUser , faCog, faCalendar, faTasks, faClipboardList } from '@fortawesome/free-solid-svg-icons';
// import './HomePage.css';
// import todoImg from '../assets/todo-img.png'; 

// function HomePage() {
//     return (
//         <div>
//             <Navbar bg="dark" expand="lg">
//                 <Navbar.Brand href="#home" style={{ color: '#A6F6F1' }}>WEBSITE</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: '#A6F6F1' }} />
//                 <Navbar.Collapse id="basic-navbar-nav" style={{ color: '#A6F6F1' }} >
//                     <Nav className="me-auto"></Nav>
//                     <Form className="d-flex ms-auto">
//                         <FormControl
//                             type="search"
//                             placeholder="Search"
//                             className="me-2"
//                             aria-label="Search"
//                         />
//                         <Button variant="outline-secondary" style={{ color: '#A6F6F1', margin: 0 }}>
//                             <FontAwesomeIcon icon={faSearch} style={{ color: '#A6F6F1' }} />
//                         </Button>
//                         <Button variant="outline-secondary" className="ms-2" style={{ color: '#A6F6F1', margin: 0 }}>
//                             <FontAwesomeIcon icon={faUser } style={{ color: '#A6F6F1' }} />
//                         </Button>
//                     </Form>
//                 </Navbar.Collapse>
//             </Navbar>

//             {/* Centered Image */}
//             <div className="text-center mt-3">
//                 <img
//                     src={todoImg}
//                     alt="Task List Illustration"
//                     style={{ maxWidth: '100%', height: 'auto' }}
//                 />
//             </div>

//             {/* Bottom Box with Cards */}
//             <div className="container-fluid mt-5">
//                 <Row className="justify-content-center">
//                     <Col xs={13}>
//                         <Card className="border-0 rounded-top" style={{ backgroundColor: '#A6F6F1'  }}> {/* Main card color */}
//                             <Card.Body className="custom-card-body" style={{ padding: '20px' }}>
//                                 <Row className="text-center">
//                                     <Col>
//                                         <Card className="mb-3" style={{ backgroundColor: 'black', border: 'none' }}> {/* Small card color */}
//                                             <Card.Body style={{ color: '#A6F6F1' }}> {/* Text and icon color */}
//                                                 <FontAwesomeIcon icon={faCog} size="2x" style={{ color: '#A6F6F1' }} />
//                                                 <Card.Title>Settings</Card.Title>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                     <Col>
//                                         <Card className="mb-3" style={{ backgroundColor: 'black', border: 'none' }}>
//                                             <Card.Body style={{ color: '#A6F6F1' }}>
//                                                 <FontAwesomeIcon icon={faCalendar} size="2x" style={{ color: '#A6F6F1' }} />
//                                                 <Card.Title>Schedule</Card.Title>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                     <Col>
//                                         <Card className="mb-3" style={{ backgroundColor: 'black', border: 'none' }}>
//                                             <Card.Body style={{ color: '#A6F6F1' }}>
//                                                 <FontAwesomeIcon icon={faClipboardList} size="2x" style={{ color: '#A6F6F1' }} />
//                                                 <Card.Title>Task</Card.Title>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                     <Col>
//                                         <Card className="mb-3" style={{ backgroundColor: 'black', border: 'none' }}>
//                                             <Card.Body style={{ color: '#A6F6F1' }}>
//                                                 <FontAwesomeIcon icon={faTasks} size="2x" style={{ color: '#A6F6F1' }} />
//                                                 <Card.Title>Calendar</Card.Title>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 </Row>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </div>
//         </div>
//     );
// }

// export default HomePage;
// src/Components/HomePage.jsx
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser , faCog, faCalendar, faTasks, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';
import todoImg from '../assets/todo-img.png';

function HomePage() {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home" style={{ color: '#A6F6F1' }}>WEBSITE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: '#A6F6F1' }} />
                <Navbar.Collapse id="basic-navbar-nav" style={{ color: '#A6F6F1' }}>
                    <Nav className="me-auto"></Nav>
                    <Form className="d-flex ms-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-secondary" style={{ color: '#A6F6F1', margin: 0 }}>
                            <FontAwesomeIcon icon={faSearch} style={{ color: '#A6F6F1' }} />
                        </Button>
                        <Button variant="outline-secondary" className="ms-2" style={{ color: '#A6F6F1', margin: 0 }}>
                            <FontAwesomeIcon icon={faUser } style={{ color: '#A6F6F1' }} />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            {/* Centered Image */}
            <div className="text-center mt-3">
                <img
                    src={todoImg}
                    alt="Task List Illustration"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>

            {/* Bottom Box with Cards */}
            <div className="container-fluid mt-5">
                <Row className="justify-content-center">
                    <Col xs={13}>
                        <Card className="border-0 rounded-top" style={{ backgroundColor: '#A6F6F1' }}>
                            <Card.Body className="custom-card-body" style={{ padding: '20px' }}>
                                <Row className="text-center">
                                    <Col>
                                        <Link to="/settings" style={{ textDecoration: 'none' }}>
                                            <Card className="mb-3" style={{ backgroundColor: 'black', border: 'none' }}>
                                                <Card.Body style={{ color: '#A6F6F1' }}>
                                                    <FontAwesomeIcon icon={faCog} size="2x" style={{ color: '#A6F6F1' }} />
                                                    <Card.Title>Settings</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="/schedule" style={{ textDecoration: 'none' }}>
                                            <Card className="mb-3" style={{ backgroundColor: 'black', border: 'none' }}>
                                                <Card.Body style={{ color: '#A6F6F1' }}>
                                                    <FontAwesomeIcon icon={faCalendar} size="2x" style={{ color: '#A6F6F1' }} />
                                                    <Card.Title>Schedule</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="/task" style={{ textDecoration: 'none' }}>
                                            <Card className="mb-3" style={{ backgroundColor: 'black', border: 'none' }}>
                                                <Card.Body style={{ color: '#A6F6F1' }}>
                                                    <FontAwesomeIcon icon={faClipboardList} size="2x" style={{ color: '#A6F6F1' }} />
                                                    <Card.Title>Task</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="/calendar" style={{ textDecoration: 'none' }}>
                                            <Card className="mb-3" style={{ backgroundColor: 'black', border: 'none' }}>
                                                <Card.Body style={{ color: '#A6F6F1' }}>
                                                    <FontAwesomeIcon icon={faTasks} size="2x" style={{ color: '#A6F6F1' }} />
                                                    <Card.Title>Calendar</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HomePage;