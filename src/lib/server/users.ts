import axios from "axios";

export const fetchAllUsers = async (pageNumber: number, pageSize: number) => {
  let page = 1;

  const url = `https://reqres.in/api/users?page=${page}`;
  const response = await axios.get<ApiInterface>(url);
  const responseTotalPage = response.data.total_pages;
  const responseUserList: UserInterface[] = response.data.data;

  while (page < responseTotalPage) {
    page += 1;
    const resp = await axios.get<ApiInterface>(url);
    responseUserList.push(...resp.data.data);
  }

  console.log("total of users => ", responseUserList.length);

  const filteredUser = responseUserList.filter(
    (user) => user.first_name[0] === "G" || user.last_name[0] === "W"
  );
  const totalPages = Math.ceil(filteredUser.length / pageSize);
  const slicedUser = filteredUser.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  );
  console.log("filtered => ", filteredUser);

  console.log(slicedUser);

  return {
    users: slicedUser,
    totalCount: filteredUser.length,
    totalPages: totalPages,
  };
};

type UserInterface = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type ApiInterface = {
  data: UserInterface[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: {
    url: string;
    text: string;
  };
};
