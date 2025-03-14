// Định nghĩa abstraction (interface)
interface IDatabase {
  connect(): void;
}

// Các implementation cụ thể của IDatabase
class MySQLDatabase implements IDatabase {
  connect() {
    console.log("Connected to MySQL database.");
  }
}

class PostgreSQLDatabase implements IDatabase {
  connect() {
    console.log("Connected to PostgreSQL database.");
  }
}

// UserService chỉ biết về abstraction, không phụ thuộc vào implementation cụ thể
class UserService {
  private database: IDatabase;

  constructor(database: IDatabase) {
    // Dependency Injection
    this.database = database;
  }

  getUser() {
    this.database.connect();
    console.log("Fetching user...");
  }
}

// Inject database từ bên ngoài (IoC)
const mysqlService = new UserService(new MySQLDatabase());
mysqlService.getUser();

const postgresService = new UserService(new PostgreSQLDatabase());
postgresService.getUser();
