import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function CoursePagination() {

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/self-paced" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/self-paced/current-page" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
