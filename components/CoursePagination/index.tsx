"use client"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { usePathname } from 'next/navigation'

export function CoursePagination() {
  const pathname = usePathname();

  const pathnames = new Map([
    ['/self-paced', '/self-paced/page-2'],
    ['/mentor-led', '/mentor-led/page-2'],
    ['/professional-advancement-series', 'professional-advancement-series/page-2'],
    ['/all-course', 'all-course/page-2'],
    ['/all-course/page-2', '/all-course/page-3'],
  ])

  const prePathnames = new Map([
    ['/self-paced/page-2', '/self-paced'],
    ['/mentor-led/page-2', '/mentor-led'],
    ['/professional-advancement-series/page-2', '/professional-advancement-series'],
    ['/all-course/page-2', '/all-course'],
    ['/all-course/page-3', '/all-course/page-2'],
    ['/all-course/page-2', '/all-course'],
  ])

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {pathname !== '/pro-picks' && <PaginationPrevious href={prePathnames.get(pathname)} />}
        </PaginationItem>
        <PaginationItem>
          {pathname !== '/pro-picks' && <PaginationNext href={pathnames.get(pathname)} />}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
