export type UsersData = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UsersListProperties[];
};

type UsersListProperties = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

export type AsyncStatus =
  | {
      status: 'idle' | 'loading';
    }
  | {
      status: 'error';
      error: number | unknown;
    };