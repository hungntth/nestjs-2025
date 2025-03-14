interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Alice",
  age: 25, // Không lỗi vì hai interface đã được gộp lại
};

console.log(user);

type Customer = {
  name: string;
};

// type Customer = {
//   age: number;
// }; // ❌ Lỗi: Duplicate identifier 'Customer'.
