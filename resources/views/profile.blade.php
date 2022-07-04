<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Profile Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="bg-slate-300 min-h-screen p-4">
        @foreach ($users as $user)
        <div class="flex justify-center w-full">
            {{-- @php 
            $user = $users[rand(0,19)];
            @endphp --}}
            
              
            <div class="bg-white md:w-1/2 w-full rounded-md shadow-md min-h-[300px] px-2 py-2 mb-4">
                <h4 class="text-center text-lg capitalize font-bold">Details For {{ $user->full_name }}</h4>
                <div class="p-3 mt-5">
                    <div class="grid grid-cols-12 gap-2">
                        <h5 class="col-span-6 text-sm font-bold">User Id: </h5>
                        <h6 class="col-span-6 text-xs text-gray-400">{{ $user->id }}</h6>
                        <h5 class="col-span-6 text-sm font-bold">Username: </h5>
                        <h6 class="col-span-6 text-xs text-gray-400">{{ $user->user_name }}</h6>
                        <h5 class="col-span-6 text-sm font-bold">Link: </h5>
                        <h6 class="col-span-6 text-xs text-gray-400">
                            <a href="{{ route('profile',$user->slug) }}">
                                {{ route('profile',$user->slug) }}
                            </a>
                        </h6>
                        <h5 class="col-span-6 text-sm font-bold">Email: </h5>
                        <h6 class="col-span-6 text-xs text-gray-400">{{ $user->email }}</h6>
                        <h5 class="col-span-6 text-sm font-bold">Address: </h5>
                        <h6 class="col-span-6 text-xs text-gray-400">{{ $user->address }}</h6>
                        <h5 class="col-span-6 text-sm font-bold">Date Registerd: </h5>
                        <h6 class="col-span-6 text-xs text-gray-400">{{ $user->created_at }}</h6>
                    </div>
                </div>
            </div>

            
            
        </div>
        @endforeach
        
    </div>
</body>
</html>