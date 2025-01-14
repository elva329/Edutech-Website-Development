import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { usePathname } from 'next/navigation'

export function CoursePagination() {
  const pathname = usePathname();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/self-paced" />
        </PaginationItem>
        <PaginationItem>
          {pathname.includes('mentor-led') ? <PaginationNext href="/mentor-led/page-2" /> : <PaginationNext href="/self-paced/page-2" />}

        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
