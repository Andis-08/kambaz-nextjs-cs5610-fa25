import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt={"reactjs"}
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image
              src="/images/golang.webp"
              width={200}
              height={150}
              alt={"golang"}
            />
            <div>
              <h5> CS2345 Go Lang </h5>
              <p className="wd-dashboard-course-title">
                GoLang and Microservices
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image
              src="/images/java.jpg"
              width={200}
              height={150}
              alt={"java"}
            />
            <div>
              <h5> CS3456 PDP </h5>
              <p className="wd-dashboard-course-title">
                Programme Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image
              src="/images/dbms.avif"
              width={200}
              height={150}
              alt={"dbms"}
            />
            <div>
              <h5> CS4567 DBMS </h5>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image
              src="/images/compsystems.jpg"
              width={200}
              height={150}
              alt={"compsystems"}
            />
            <div>
              <h5> CS5678 CS </h5>
              <p className="wd-dashboard-course-title">Computer Systems</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image
              src="/images/compsystems.jpg"
              width={200}
              height={150}
              alt={"compsystems"}
            />
            <div>
              <h5> CS6789 AI </h5>
              <p className="wd-dashboard-course-title">
                Artificial Intelligence
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <Image
              src="/images/compsystems.jpg"
              width={200}
              height={150}
              alt={"compsystems"}
            />
            <div>
              <h5> CS7890 Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Cloud Computing Concepts
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/8901" className="wd-dashboard-course-link">
            <Image
              src="/images/compsystems.jpg"
              width={200}
              height={150}
              alt={"compsystems"}
            />
            <div>
              <h5> CS8901 MLOPS </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning Operations
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/9012" className="wd-dashboard-course-link">
            <Image
              src="/images/compsystems.jpg"
              width={200}
              height={150}
              alt={"compsystems"}
            />
            <div>
              <h5> CS9012 PM </h5>
              <p className="wd-dashboard-course-title">Project Management</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1345" className="wd-dashboard-course-link">
            <Image
              src="/images/compsystems.jpg"
              width={200}
              height={150}
              alt={"compsystems"}
            />
            <div>
              <h5> CS1345 BSDS</h5>
              <p className="wd-dashboard-course-title">
                Building Scalable Distributed Systems
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
