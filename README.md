# Music Store

##### Epicodus exercise using Java and Postgres, 03.24.2016

##### Michael Schennum and Ryan King

## Description
Music Store allows users to enter in cds and artists, as well as update their names.

## Setup

Clone this repository:
```

Open terminal and run Postgres:
```
$ postgres
```

Open a new tab in terminal and create the `concert` database:
```
$ psql
$ CREATE DATABASE concert;
$ psql concert < concert.sql
```

Navigate back to the directory where this repository has been cloned and run gradle:
```
$ gradle run
```

## Technologies Used

Java, Spark, JUnit, FluentLenium, Velocity, PostgreSQL, Bootstrap

## Legal

Copyright (c) 2016 Michael Schennum and Ryan King

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
