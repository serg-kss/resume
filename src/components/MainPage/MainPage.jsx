import Education from "./Education/Education"
import Profile from "./Profile/Profile"
import styles from "./MainPage.module.css"


function MainPage(params) {

    const staticData = {
        name: 'Serg Box',
        documentName: 'Resume',
        specialization: 'FullStack developer with a good knoledge of Java Script and Python',
        sectionTitle : 'Education'
    }

    const education = [
        {
            year: '2012-2014',
            degree: 'Master',
            university: 'Univercity of Limerick',
            faculty: 'Marketing',
            country:'Ireland'
        },
        {
            year: '2008-2012',
            degree: 'Bachelor',
            university: 'Mining Univercity',
            faculty: 'Economy',
            country:'Ukraine'
        }
    ]
    return(
        <div className={styles.mainPage}>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{staticData.documentName}</span> {staticData.name}</h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl">{staticData.specialization}</p>
            <Profile />
            <p class="text-xl font-semibold text-blue-600/100">{staticData.sectionTitle}</p>
            <div className={styles.educationContainer}>
                {education.map((el, index)=> {
                    return (
                        <div className={styles.education} key={index}>
                            <Education data = {el}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainPage