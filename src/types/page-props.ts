import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { AirportTransportType, CarWithDriverType, CarWithOutType } from "./car-type";
import { FoodAndDrinksType, PaginationType, ReviewTypes, ThingToSeeType } from "./index";
import { TourAccessoryType } from "./services";
import { TourDestination, TourType } from "./tour";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface HomePageProps {
  reviews: ReviewTypes[];
  tours: TourType[];
  destinations: TourDestination[];
}

export interface BlogPageProps {
  dataState: any;
  tours: any;
}

export interface ToursPageProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  tabIndex: any;
  tabs: {
    id: any;
    name: string;
    value: string;
  }[];
  title: string;
  tours: any;
  handlePageChange: any;
  handleSearch: any;
  meta: {
    page: number;
    totalPages: number;
    limit: number;
  }
}

export interface SearchPageProps {
  tours: any;
  handlePageChange: any;
  handleSearch: any;
  meta: {
    page: number;
    totalPages: number;
    limit: number;
  };
  destinations: TourDestination[];
  typeItems: any;
}

export interface TransportPageProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  currentTab: any;
  carsWithoutDriver: CarWithOutType[];
  carsWithDriver: CarWithDriverType;
  airportTransport: AirportTransportType;
  handleSearch: any;
  handlePageChange: any;
  metaData: any;
}

export interface ThingToSeePageProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  currentTab: {
    title: string;
    value: string;
  };
  tabs: {
    title: string;
    value: string;
    icon: React.ReactNode;
  }[];
  things: ThingToSeeType[];
  handleSearch: any;
  handlePageChange: any;
  metaData: any;
  findTab: any;
}

export interface FoodAndDrinkPageProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  currentTab: {
    title: string;
    value: string;
    icon: React.ReactNode
  } | null;
  tabs: {
    title: string;
    value: string;
    icon: React.ReactNode;
  }[];
  findTab: any;
  foodAndDrinks: FoodAndDrinksType[];
  handleSearch: any;
  handlePageChange: any;
  metaData: any;
}

export interface AccessoriesPageProps {
  accessories: TourAccessoryType[];
  handleSearch: any;
  handlePageChange: any;
  metaData: any;
}

export interface AboutUsUIProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  tabIndex: any;
  reviews: ReviewTypes[];
  reviewsPagination: PaginationType;
}


