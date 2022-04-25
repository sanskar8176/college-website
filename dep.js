
const q = window.location.href
const url = new URL(q)
var k = url.searchParams.get('branch')
console.log(k)

var depart = 'hello world'
var vision = 'content'
var mission = 'content'

if (k=='ce'){
    depart = 'Department of Civil Engineering was established in year 1990. Its courses include all important subjects of civil engineering with more emphasis on the analysis and design of various types of real life problems faced by civil engineers. The department is engaged by Ministry of Urban Development, govt. of India and U.P. Jal Nigam to field and sector professionals of various govt. departments. In last 15 years department has organized seminar on "Environment Aspects of Engineering Practices ( ENEAP-98) " during 17-18 April 1998 and national conference on "Application of Remote Sensing & GIS in Resource Management". The department has conducted number of training programs to train field engineers of RES and Jal Nigam. Presently deptt. has 3 sponsored projects under various schemes of AICTE and DST, New Delhi worth Rs. 41 lakhs.';
    vision = 'To impart quality education in Civil Engineering to serve the changing needs of environmental protection, public housing, health & sanitation, and transportation using modern developed techniques for the fast developing society of rural and urban areas.'
    mission = 'To strengthen academic infrastructure leading to quality professionals in the field of civil engineering.To impart the domain knowledge to the students through well designed curriculum based on the inputs from major stakeholders to serve the needs of infrastructure development for the benefit of society.To enhance technical skill through collaborations with premium academic institutions, research organizations and career counselors to promote employability, entrepreneurship and higher studies.'

}
else if (k=='cse'){
    depart = 'The Department of Computer Science and Engineering was among the first two departments established in the year 1989 of Bundelkhand Institute of Engineering and Technology. Initially, it is started with the intake of 30 students then further increased to 70 students. Initially, only one branch runs under the department but now there are two branches, B.Tech (Computer Science and Engineering) and B.Tech (Information Technology) with intake 45 runs under the Department of Computer Science and Engineering. The department is a member of the Computer Society of India (CSI) and the Indian Society for Technical Education (ISTE) and is government-funded. The department is also an approved study center for IGNOU computer courses.';
    vision = 'To impart Quality education in Computer Science and Engineering to serve the changing needs of industry and society.'
    mission = 'M1: To strengthen academic infrastructure leading to quality professionals in the field of Computer Science and Engineering. M2: To impart the domain knowledge to the students through a well-designed curriculum based on the inputs from stakeholders to serve the needs of industry and society. M3: To enhance technical skills through collaborations with premier academic institutions, research organizations, and industries to promote employability and inculcate entrepreneurship.'

}
else if (k=='me'){
    depart = 'The Department of Mechanical Engineering is one of the pioneer and leading department in terms of well-educated faculty members, research activities as well as facilities. Established in 1990, the Mechanical Engineering Department offers courses in B.Tech (Mechanical) and M.Tech. (Manufacturing Science & Technology and Thermal Engineering) and Ph.D Programme (through AKTU) affiliated with AKTU, Lucknow suiting to the requirements of modern industry and research. M.Tech in Manufacturing Science and Technology was started in 2006 and M.Tech in Thermal Engineering was started in 2012.'
    vision = 'To impart quality education in mechanical engineering to serve the changing needs of industry and society'
    mission = 'To strengthen academic infrastructure leading to quality professionals in the field of mechanical engineering To impart the domain knowledge to the students through well designed curriculum based on the inputs from stakeholders to serve the needs of industry and society.To enhance the technical skill through collaborations with premier academic institutions, research organizations and industries to promote the employability and inculcate entrepreneurship'

}
else{
    depart = 'The chemical engineering department was established in 1996 with an intake of 30 students for Bachelor of Technology. Our institute is affiliated to AKTU, Lucknow. Our curriculum has world class norms, in order to provide not only the informational but also to provide the knowledge to create wisdom in the field. The department is determined to enhance the academic excellence of students and involvement of faculties in various activities to explore the knowledge in recent developments in chemical engineering. Department focuses and trains people who can shape the future with competence and dedication. Its courses include all important aspects of chemical engineering with more emphasis on analysis and implementation of various types of technology and development. Department has fully equipped laboratories to facilitate students to improve their practical knowledge in different subjects.The Department of Chemical Engineering has a strong focus on excellence in education and research.The Department has built up good experimental and computational facilities. The department has been built over the years by faculty members, who have always been exceptionally hard-working, highly dedicated to research and committed to provide cutting edge knowledge and rigorous training to their students.'
    vision = 'To impart quality education in chemical engineering to serve the changing needs of industry and society'
    mission = 'To strengthen academic infrastructure leading to quality professionals in the field of chemical engineering. To impart the domain knowledge to the students through well designed curriculum based on the inputs from the stake-holders to serve the needs of industry and society.To enhance the technical skill through collaborations with premier academic institutions, research organizations and industries to promote the employability and inculcate entrepreneurship.'
    console.log(4)
}
document.getElementById('dep-content').innerHTML = depart
document.getElementById('vision-content').innerHTML = vision
document.getElementById('mission-content').innerHTML = mission
