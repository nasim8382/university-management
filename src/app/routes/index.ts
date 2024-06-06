import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRouters } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRouters } from "../modules/academicDepartment/academicDepartment.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoutes,
  },
  {
    path: "/academic-faculties",
    route: AcademicFacultyRouters,
  },
  {
    path: "/academic-departments",
    route: AcademicDepartmentRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
