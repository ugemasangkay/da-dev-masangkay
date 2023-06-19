<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Head content -->

        @yield('styles')
    </head>
    <body>
        <!-- Body content -->

        @yield('content')

        @yield('scripts')
    </body>
</html>
