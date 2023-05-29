// @flow strict

import { Container, FormControl, InputAdornment, InputLabel, OutlinedInput, Pagination, PaginationItem, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { TransportPageProps } from "../../../types/page-props";
import TransportCard from "../../shared/cards/transport-card";
import SectionTitle from "../../shared/section-title";

const toursData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function TransportUI({
  handleTabChange,
  currentTab,
  tabs,
}: TransportPageProps) {
  const [page, setPage] = useState(1);

  return (
    <Container className='my-8 flex flex-col items-center'>
      <div className='lg:w-[60%] text-center py-3 px-6 regular-shadow rounded-lg'>
        <Tabs
          value={currentTab.value}
          onChange={handleTabChange}
          className='pages-tabs gap-5'
          TabIndicatorProps={{
            style: { display: "none" },
          }}>
          {
            tabs.map((tab, i) => (
              <Tab key={i} value={tab.value} className="" label={tab.title} />
            ))
          }
        </Tabs>
      </div>
      <div className='my-4 md:my-8'>
        <div className="flex items-center justify-between">
          <SectionTitle title={currentTab.title} />
          <FormControl size="small" className="shadow-sm" variant="outlined">
            <InputLabel>Search your  Need</InputLabel>
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <BiSearch className="text-[#EDA592]" />
                </InputAdornment>
              }
              label="Search your Tours"
            />
          </FormControl>

        </div>
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
            {toursData.slice((page - 1) * 6, page * 6).map((item, i) => (
              <TransportCard key={i} />
            ))}
          </div>
          <div className='flex justify-center my-3 md:my-6'>
            {toursData.length > 0 && (
              <Pagination
                size='large'
                onChange={(_, p) => setPage(p)}
                count={Math.ceil(toursData.length / 6)}
                shape='rounded'
                renderItem={(item) => (
                  <PaginationItem
                    sx={{ color: "#EDA592", bgcolor: "#ffffff" }}
                    className='pagination'
                    components={{
                      next: (props) => (
                        <span className='border-0 p-0 bg-transparent text-[#EDA592]'>
                          Next
                        </span>
                      ),
                      previous: (props) => (
                        <span className='border-0 p-0 bg-transparent text-[#EDA592]'>
                          Prev
                        </span>
                      ),
                    }}
                    {...item}
                  />
                )}
                variant='outlined'
              />
            )}
          </div>
        </>
      </div>
    </Container>
  );
};

export default TransportUI;