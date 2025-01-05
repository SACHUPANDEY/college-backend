// src/course/course.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './Course.service';

@Controller('college_courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get(':college_id')
  async getCollegeCourses(@Param('college_id') college_id: string) {
    return this.courseService.getCoursesForCollege(college_id);
  }
}
