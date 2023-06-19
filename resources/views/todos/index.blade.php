<html>
    <head>
        <title>Todo App</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
        @extends('layouts.app')

        @section('content')
            <div id="app"></div>
        @endsection

        @section('scripts')
            <script src="{{ mix('js/app.js') }}"></script>
        @endsection
    </body>
</html>
