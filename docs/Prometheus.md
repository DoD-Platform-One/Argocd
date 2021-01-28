# Prometheus & ArgoCD
- Configuration Items
  Istio ServiceMonitors for ArgoCD are deployed as a separate ArgoCD Application from apps/service-monitors
  There are 3 that get deployed:
   * argocd-app-metrics
   * argocd-repo-metrics
   * argocd-server-metrics
- List of metrics gathered
  * ### argocd-server metrics port 8083

       ```
       # HELP argocd_redis_request_duration Redis requests duration.
       # TYPE argocd_redis_request_duration histogram
       argocd_redis_request_duration_bucket{initiator="argocd-server",le="0.1"} 10
       argocd_redis_request_duration_bucket{initiator="argocd-server",le="0.25"} 10
       argocd_redis_request_duration_bucket{initiator="argocd-server",le="0.5"} 10
       argocd_redis_request_duration_bucket{initiator="argocd-server",le="1"} 10
       argocd_redis_request_duration_bucket{initiator="argocd-server",le="2"} 10
       argocd_redis_request_duration_bucket{initiator="argocd-server",le="+Inf"} 10
       argocd_redis_request_duration_sum{initiator="argocd-server"} 0.00964515
       argocd_redis_request_duration_count{initiator="argocd-server"} 10
       # HELP argocd_redis_request_total Number of kubernetes requests executed during application reconciliation.
       # TYPE argocd_redis_request_total counter
       argocd_redis_request_total{failed="false",initiator="argocd-server"} 9
       argocd_redis_request_total{failed="true",initiator="argocd-server"} 1
       # HELP go_gc_duration_seconds A summary of the GC invocation durations.
       # TYPE go_gc_duration_seconds summary
       go_gc_duration_seconds{quantile="0"} 1.154e-05
       go_gc_duration_seconds{quantile="0.25"} 1.474e-05
       go_gc_duration_seconds{quantile="0.5"} 8.147e-05
       go_gc_duration_seconds{quantile="0.75"} 0.000186974
       go_gc_duration_seconds{quantile="1"} 0.000559502
       go_gc_duration_seconds_sum 0.003221957
       go_gc_duration_seconds_count 27
       # HELP go_goroutines Number of goroutines that currently exist.
       # TYPE go_goroutines gauge
       go_goroutines 137
       # HELP go_info Information about the Go environment.
       # TYPE go_info gauge
       go_info{version="go1.14.1"} 1
       # HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
       # TYPE go_memstats_alloc_bytes gauge
       go_memstats_alloc_bytes 8.893584e+06
       # HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
       # TYPE go_memstats_alloc_bytes_total counter
       go_memstats_alloc_bytes_total 1.52253936e+08
       # HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
       # TYPE go_memstats_buck_hash_sys_bytes gauge
       go_memstats_buck_hash_sys_bytes 1.489036e+06
       # HELP go_memstats_frees_total Total number of frees.
       # TYPE go_memstats_frees_total counter
       go_memstats_frees_total 1.836034e+06
       # HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
       # TYPE go_memstats_gc_cpu_fraction gauge
       go_memstats_gc_cpu_fraction 0.0001005226099122819
       # HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
       # TYPE go_memstats_gc_sys_bytes gauge
       go_memstats_gc_sys_bytes 3.594504e+06
       # HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
       # TYPE go_memstats_heap_alloc_bytes gauge
       go_memstats_heap_alloc_bytes 8.893584e+06
       # HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
       # TYPE go_memstats_heap_idle_bytes gauge
       go_memstats_heap_idle_bytes 5.2240384e+07
       # HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
       # TYPE go_memstats_heap_inuse_bytes gauge
       go_memstats_heap_inuse_bytes 1.3426688e+07
       # HELP go_memstats_heap_objects Number of allocated objects.
       # TYPE go_memstats_heap_objects gauge
       go_memstats_heap_objects 64128
       # HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
       # TYPE go_memstats_heap_released_bytes gauge
       go_memstats_heap_released_bytes 4.7177728e+07
       # HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
       # TYPE go_memstats_heap_sys_bytes gauge
       go_memstats_heap_sys_bytes 6.5667072e+07
       # HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
       # TYPE go_memstats_last_gc_time_seconds gauge
       go_memstats_last_gc_time_seconds 1.600102640167559e+09
       # HELP go_memstats_lookups_total Total number of pointer lookups.
       # TYPE go_memstats_lookups_total counter
       go_memstats_lookups_total 0
       # HELP go_memstats_mallocs_total Total number of mallocs.
       # TYPE go_memstats_mallocs_total counter
       go_memstats_mallocs_total 1.900162e+06
       # HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
       # TYPE go_memstats_mcache_inuse_bytes gauge
       go_memstats_mcache_inuse_bytes 6944
       # HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
       # TYPE go_memstats_mcache_sys_bytes gauge
       go_memstats_mcache_sys_bytes 16384
       # HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
       # TYPE go_memstats_mspan_inuse_bytes gauge
       go_memstats_mspan_inuse_bytes 191896
       # HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
       # TYPE go_memstats_mspan_sys_bytes gauge
       go_memstats_mspan_sys_bytes 245760
       # HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
       # TYPE go_memstats_next_gc_bytes gauge
       go_memstats_next_gc_bytes 1.601944e+07
       # HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
       # TYPE go_memstats_other_sys_bytes gauge
       go_memstats_other_sys_bytes 1.027948e+06
       # HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
       # TYPE go_memstats_stack_inuse_bytes gauge
       go_memstats_stack_inuse_bytes 1.441792e+06
       # HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
       # TYPE go_memstats_stack_sys_bytes gauge
       go_memstats_stack_sys_bytes 1.441792e+06
       # HELP go_memstats_sys_bytes Number of bytes obtained from system.
       # TYPE go_memstats_sys_bytes gauge
       go_memstats_sys_bytes 7.3482496e+07
       # HELP go_threads Number of OS threads created.
       # TYPE go_threads gauge
       go_threads 10
       # HELP grpc_server_handled_total Total number of RPCs completed on the server, regardless of success or failure.
       # TYPE grpc_server_handled_total counter
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Aborted",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="AlreadyExists",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Canceled",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DataLoss",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="DeadlineExceeded",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="FailedPrecondition",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Internal",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="InvalidArgument",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="NotFound",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 1
       grpc_server_handled_total{grpc_code="OK",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 1
       grpc_server_handled_total{grpc_code="OK",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OK",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="OutOfRange",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="PermissionDenied",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="ResourceExhausted",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unauthenticated",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unavailable",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unimplemented",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_handled_total{grpc_code="Unknown",grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       # HELP grpc_server_msg_received_total Total number of RPC stream messages received on the server.
       # TYPE grpc_server_msg_received_total counter
       grpc_server_msg_received_total{grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 1
       grpc_server_msg_received_total{grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 1
       grpc_server_msg_received_total{grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_msg_received_total{grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_msg_received_total{grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_msg_received_total{grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 1
       # HELP grpc_server_msg_sent_total Total number of gRPC stream messages sent by the server.
       # TYPE grpc_server_msg_sent_total counter
       grpc_server_msg_sent_total{grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 1
       grpc_server_msg_sent_total{grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 1
       grpc_server_msg_sent_total{grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_msg_sent_total{grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_msg_sent_total{grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_msg_sent_total{grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 432
       # HELP grpc_server_started_total Total number of RPCs started on the server.
       # TYPE grpc_server_started_total counter
       grpc_server_started_total{grpc_method="CanI",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Create",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Create",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Create",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Create",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Create",grpc_service="session.SessionService",grpc_type="unary"} 1
       grpc_server_started_total{grpc_method="CreateCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="CreateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="CreateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="CreateToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="CreateToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Delete",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Delete",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Delete",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Delete",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Delete",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="DeleteCertificate",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="DeleteRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="DeleteRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="DeleteResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="DeleteToken",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="DeleteToken",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Get",grpc_service="application.ApplicationService",grpc_type="unary"} 1
       grpc_server_started_total{grpc_method="Get",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Get",grpc_service="cluster.SettingsService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Get",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Get",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="GetAccount",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="GetAppDetails",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="GetApplicationSyncWindows",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="GetHelmCharts",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="GetManifests",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="GetResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="GetSyncWindowsState",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="GetUserInfo",grpc_service="session.SessionService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="List",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="List",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="List",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="List",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ListAccounts",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ListApps",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ListCertificates",grpc_service="certificate.CertificateService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ListEvents",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ListRepositories",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ListRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ListResourceActions",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ListResourceEvents",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ManagedResources",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Patch",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="PatchResource",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="PodLogs",grpc_service="application.ApplicationService",grpc_type="server_stream"} 0
       grpc_server_started_total{grpc_method="ResourceTree",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="RevisionMetadata",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Rollback",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="RotateAuth",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="RunResourceAction",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ServerReflectionInfo",grpc_service="grpc.reflection.v1alpha.ServerReflection",grpc_type="bidi_stream"} 0
       grpc_server_started_total{grpc_method="Sync",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="TerminateOperation",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Update",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Update",grpc_service="cluster.ClusterService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Update",grpc_service="project.ProjectService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Update",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="UpdatePassword",grpc_service="account.AccountService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="UpdateRepository",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="UpdateRepositoryCredentials",grpc_service="repocreds.RepoCredsService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="UpdateSpec",grpc_service="application.ApplicationService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="ValidateAccess",grpc_service="repository.RepositoryService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Version",grpc_service="version.VersionService",grpc_type="unary"} 0
       grpc_server_started_total{grpc_method="Watch",grpc_service="application.ApplicationService",grpc_type="server_stream"} 1
       # HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
       # TYPE process_cpu_seconds_total counter
       process_cpu_seconds_total 3.36
       # HELP process_max_fds Maximum number of open file descriptors.
       # TYPE process_max_fds gauge
       process_max_fds 1.048576e+06
       # HELP process_open_fds Number of open file descriptors.
       # TYPE process_open_fds gauge
       process_open_fds 35
       # HELP process_resident_memory_bytes Resident memory size in bytes.
       # TYPE process_resident_memory_bytes gauge
       process_resident_memory_bytes 4.6768128e+07
       # HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
       # TYPE process_start_time_seconds gauge
       process_start_time_seconds 1.60010201257e+09
       # HELP process_virtual_memory_bytes Virtual memory size in bytes.
       # TYPE process_virtual_memory_bytes gauge
       process_virtual_memory_bytes 7.74590464e+08
       # HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
       # TYPE process_virtual_memory_max_bytes gauge
       process_virtual_memory_max_bytes -1
       ```

   * ### argocd-repo-server metrics port 8084

       ```
       # HELP argocd_git_request_total Number of git requests performed by repo server
       # TYPE argocd_git_request_total counter
       argocd_git_request_total{repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap.git",request_type="fetch"} 13
       argocd_git_request_total{repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap.git",request_type="ls-remote"} 220
       # HELP argocd_redis_request_duration Redis requests duration.
       # TYPE argocd_redis_request_duration histogram
       argocd_redis_request_duration_bucket{initiator="argocd-repo-server",le="0.1"} 1334
       argocd_redis_request_duration_bucket{initiator="argocd-repo-server",le="0.25"} 1340
       argocd_redis_request_duration_bucket{initiator="argocd-repo-server",le="0.5"} 1341
       argocd_redis_request_duration_bucket{initiator="argocd-repo-server",le="1"} 1341
       argocd_redis_request_duration_bucket{initiator="argocd-repo-server",le="2"} 1341
       argocd_redis_request_duration_bucket{initiator="argocd-repo-server",le="+Inf"} 1341
       argocd_redis_request_duration_sum{initiator="argocd-repo-server"} 5.306318806999995
       argocd_redis_request_duration_count{initiator="argocd-repo-server"} 1341
       # HELP argocd_redis_request_total Number of kubernetes requests executed during application reconciliation.
       # TYPE argocd_redis_request_total counter
       argocd_redis_request_total{failed="false",initiator="argocd-repo-server"} 1341
       # HELP argocd_repo_pending_request_total Number of pending requests requiring repository lock
       # TYPE argocd_repo_pending_request_total gauge
       argocd_repo_pending_request_total{repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap.git"} 0
       # HELP go_gc_duration_seconds A summary of the GC invocation durations.
       # TYPE go_gc_duration_seconds summary
       go_gc_duration_seconds{quantile="0"} 8.28e-06
       go_gc_duration_seconds{quantile="0.25"} 1.863e-05
       go_gc_duration_seconds{quantile="0.5"} 6.5321e-05
       go_gc_duration_seconds{quantile="0.75"} 0.00011252
       go_gc_duration_seconds{quantile="1"} 0.165668311
       go_gc_duration_seconds_sum 0.409927016
       go_gc_duration_seconds_count 351
       # HELP go_goroutines Number of goroutines that currently exist.
       # TYPE go_goroutines gauge
       go_goroutines 13
       # HELP go_info Information about the Go environment.
       # TYPE go_info gauge
       go_info{version="go1.14.1"} 1
       # HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
       # TYPE go_memstats_alloc_bytes gauge
       go_memstats_alloc_bytes 8.632392e+06
       # HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
       # TYPE go_memstats_alloc_bytes_total counter
       go_memstats_alloc_bytes_total 1.69270304e+09
       # HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
       # TYPE go_memstats_buck_hash_sys_bytes gauge
       go_memstats_buck_hash_sys_bytes 1.686862e+06
       # HELP go_memstats_frees_total Total number of frees.
       # TYPE go_memstats_frees_total counter
       go_memstats_frees_total 1.2269845e+07
       # HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
       # TYPE go_memstats_gc_cpu_fraction gauge
       go_memstats_gc_cpu_fraction 0.003358724601906546
       # HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
       # TYPE go_memstats_gc_sys_bytes gauge
       go_memstats_gc_sys_bytes 3.709192e+06
       # HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
       # TYPE go_memstats_heap_alloc_bytes gauge
       go_memstats_heap_alloc_bytes 8.632392e+06
       # HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
       # TYPE go_memstats_heap_idle_bytes gauge
       go_memstats_heap_idle_bytes 5.4648832e+07
       # HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
       # TYPE go_memstats_heap_inuse_bytes gauge
       go_memstats_heap_inuse_bytes 1.1706368e+07
       # HELP go_memstats_heap_objects Number of allocated objects.
       # TYPE go_memstats_heap_objects gauge
       go_memstats_heap_objects 54074
       # HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
       # TYPE go_memstats_heap_released_bytes gauge
       go_memstats_heap_released_bytes 5.3116928e+07
       # HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
       # TYPE go_memstats_heap_sys_bytes gauge
       go_memstats_heap_sys_bytes 6.63552e+07
       # HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
       # TYPE go_memstats_last_gc_time_seconds gauge
       go_memstats_last_gc_time_seconds 1.6001025792928398e+09
       # HELP go_memstats_lookups_total Total number of pointer lookups.
       # TYPE go_memstats_lookups_total counter
       go_memstats_lookups_total 0
       # HELP go_memstats_mallocs_total Total number of mallocs.
       # TYPE go_memstats_mallocs_total counter
       go_memstats_mallocs_total 1.2323919e+07
       # HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
       # TYPE go_memstats_mcache_inuse_bytes gauge
       go_memstats_mcache_inuse_bytes 6944
       # HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
       # TYPE go_memstats_mcache_sys_bytes gauge
       go_memstats_mcache_sys_bytes 16384
       # HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
       # TYPE go_memstats_mspan_inuse_bytes gauge
       go_memstats_mspan_inuse_bytes 165104
       # HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
       # TYPE go_memstats_mspan_sys_bytes gauge
       go_memstats_mspan_sys_bytes 344064
       # HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
       # TYPE go_memstats_next_gc_bytes gauge
       go_memstats_next_gc_bytes 8.514736e+06
       # HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
       # TYPE go_memstats_other_sys_bytes gauge
       go_memstats_other_sys_bytes 977578
       # HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
       # TYPE go_memstats_stack_inuse_bytes gauge
       go_memstats_stack_inuse_bytes 720896
       # HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
       # TYPE go_memstats_stack_sys_bytes gauge
       go_memstats_stack_sys_bytes 720896
       # HELP go_memstats_sys_bytes Number of bytes obtained from system.
       # TYPE go_memstats_sys_bytes gauge
       go_memstats_sys_bytes 7.3810176e+07
       # HELP go_threads Number of OS threads created.
       # TYPE go_threads gauge
       go_threads 11
       # HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
       # TYPE process_cpu_seconds_total counter
       process_cpu_seconds_total 26.49
       # HELP process_max_fds Maximum number of open file descriptors.
       # TYPE process_max_fds gauge
       process_max_fds 1.048576e+06
       # HELP process_open_fds Number of open file descriptors.
       # TYPE process_open_fds gauge
       process_open_fds 14
       # HELP process_resident_memory_bytes Resident memory size in bytes.
       # TYPE process_resident_memory_bytes gauge
       process_resident_memory_bytes 3.9002112e+07
       # HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
       # TYPE process_start_time_seconds gauge
       process_start_time_seconds 1.60010201161e+09
       # HELP process_virtual_memory_bytes Virtual memory size in bytes.
       # TYPE process_virtual_memory_bytes gauge
       process_virtual_memory_bytes 7.66001152e+08
       # HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
       # TYPE process_virtual_memory_max_bytes gauge
       process_virtual_memory_max_bytes -1
       ```

   * ### argocd-application-controller port 8082

       ```
       # HELP argocd_app_info Information about application.
       # TYPE argocd_app_info gauge
       argocd_app_info{dest_namespace="anchore",dest_server="https://kubernetes.default.svc",health_status="Unknown",name="anchore",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Unknown"} 1
       argocd_app_info{dest_namespace="argocd",dest_server="https://kubernetes.default.svc",health_status="Missing",name="umbrella-app",namespace="argocd",operation="sync",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="OutOfSync"} 1
       argocd_app_info{dest_namespace="artifactory",dest_server="https://kubernetes.default.svc",health_status="Unknown",name="artifactory",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Unknown"} 1
       argocd_app_info{dest_namespace="elastic",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="eck",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="OutOfSync"} 1
       argocd_app_info{dest_namespace="elastic",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="fluentd",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="gatekeeper-system",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="opa-gatekeeper",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="gatekeeper-system",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="opa-gatekeeper-constraints",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="gitlab",dest_server="https://kubernetes.default.svc",health_status="Missing",name="gitlab",namespace="argocd",operation="sync",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="OutOfSync"} 1
       argocd_app_info{dest_namespace="istio-system",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="istio",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="istio-system",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="kiali",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="istio-system",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="tracing",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="keycloak",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="keycloak",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="kube-system",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="ebs",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="mattermost",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="mattermost",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="minio",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="minio",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="minio-operator",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="minio-operator",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Synced"} 1
       argocd_app_info{dest_namespace="monitoring",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="monitoring",namespace="argocd",operation="sync",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="OutOfSync"} 1
       argocd_app_info{dest_namespace="nexus",dest_server="https://kubernetes.default.svc",health_status="Unknown",name="nexus",namespace="argocd",operation="",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="Unknown"} 1
       argocd_app_info{dest_namespace="sonarqube",dest_server="https://kubernetes.default.svc",health_status="Missing",name="sonarqube",namespace="argocd",operation="sync",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="OutOfSync"} 1
       argocd_app_info{dest_namespace="twistlock",dest_server="https://kubernetes.default.svc",health_status="Missing",name="twistlock",namespace="argocd",operation="sync",project="managed-apps",repo="https://repo1.dso.mil/platform-one/private/big-bang/fences-bootstrap",sync_status="OutOfSync"} 1
       # HELP argocd_app_k8s_request_total Number of kubernetes requests executed during application reconciliation.
       # TYPE argocd_app_k8s_request_total counter
       argocd_app_k8s_request_total{name="ebs",namespace="argocd",project="managed-apps",resource_kind="storage.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="admissionregistration.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 6
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="apiextensions.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 66
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="customresourcedefinitions",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 82
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="elasticsearch.k8s.elastic.co",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 3
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="elasticsearch.k8s.elastic.co",resource_namespace="",response_code="404",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="kibana.k8s.elastic.co",resource_namespace="",response_code="404",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="rbac.authorization.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="eck",namespace="argocd",project="managed-apps",resource_kind="security.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="fluentd",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 3
       argocd_app_k8s_request_total{name="fluentd",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="fluentd",namespace="argocd",project="managed-apps",resource_kind="monitoring.coreos.com",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="fluentd",namespace="argocd",project="managed-apps",resource_kind="rbac.authorization.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 4
       argocd_app_k8s_request_total{name="gitlab",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 37
       argocd_app_k8s_request_total{name="gitlab",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 10
       argocd_app_k8s_request_total{name="gitlab",namespace="argocd",project="managed-apps",resource_kind="autoscaling",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 4
       argocd_app_k8s_request_total{name="gitlab",namespace="argocd",project="managed-apps",resource_kind="batch",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 6
       argocd_app_k8s_request_total{name="gitlab",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="gitlab",namespace="argocd",project="managed-apps",resource_kind="policy",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 6
       argocd_app_k8s_request_total{name="gitlab",namespace="argocd",project="managed-apps",resource_kind="rbac.authorization.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 4
       argocd_app_k8s_request_total{name="istio",namespace="argocd",project="managed-apps",resource_kind="admissionregistration.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 3
       argocd_app_k8s_request_total{name="istio",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 27
       argocd_app_k8s_request_total{name="istio",namespace="argocd",project="managed-apps",resource_kind="apiextensions.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 25
       argocd_app_k8s_request_total{name="istio",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 7
       argocd_app_k8s_request_total{name="istio",namespace="argocd",project="managed-apps",resource_kind="autoscaling",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 4
       argocd_app_k8s_request_total{name="istio",namespace="argocd",project="managed-apps",resource_kind="customresourcedefinitions",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 144
       argocd_app_k8s_request_total{name="istio",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="404",server="https://10.96.0.1:443",verb="Get"} 12
       argocd_app_k8s_request_total{name="istio",namespace="argocd",project="managed-apps",resource_kind="policy",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 4
       argocd_app_k8s_request_total{name="istio",namespace="argocd",project="managed-apps",resource_kind="rbac.authorization.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 18
       argocd_app_k8s_request_total{name="keycloak",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 60
       argocd_app_k8s_request_total{name="keycloak",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 6
       argocd_app_k8s_request_total{name="keycloak",namespace="argocd",project="managed-apps",resource_kind="authentication.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 6
       argocd_app_k8s_request_total{name="keycloak",namespace="argocd",project="managed-apps",resource_kind="batch",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 7
       argocd_app_k8s_request_total{name="keycloak",namespace="argocd",project="managed-apps",resource_kind="jobs",resource_namespace="keycloak",response_code="200",server="https://10.96.0.1:443",verb="Delete"} 1
       argocd_app_k8s_request_total{name="keycloak",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 6
       argocd_app_k8s_request_total{name="keycloak",namespace="argocd",project="managed-apps",resource_kind="networking.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 18
       argocd_app_k8s_request_total{name="kiali",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="kiali",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 25
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="apiextensions.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 10
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="batch",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 6
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="customresourcedefinitions",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 4
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="jobs",resource_namespace="mattermost",response_code="200",server="https://10.96.0.1:443",verb="Delete"} 1
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="mattermost.com",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="mattermost.com",resource_namespace="",response_code="404",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="monitoring.coreos.com",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="mattermost",namespace="argocd",project="managed-apps",resource_kind="rbac.authorization.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 20
       argocd_app_k8s_request_total{name="minio",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="minio",namespace="argocd",project="managed-apps",resource_kind="monitoring.coreos.com",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="minio",namespace="argocd",project="managed-apps",resource_kind="operator.min.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="minio",namespace="argocd",project="managed-apps",resource_kind="rbac.authorization.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="minio-operator",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="minio-operator",namespace="argocd",project="managed-apps",resource_kind="apiextensions.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="minio-operator",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="minio-operator",namespace="argocd",project="managed-apps",resource_kind="customresourcedefinitions",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="minio-operator",namespace="argocd",project="managed-apps",resource_kind="rbac.authorization.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="monitoring",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 47
       argocd_app_k8s_request_total{name="monitoring",namespace="argocd",project="managed-apps",resource_kind="apiextensions.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 11
       argocd_app_k8s_request_total{name="monitoring",namespace="argocd",project="managed-apps",resource_kind="apiregistration.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="monitoring",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="monitoring",namespace="argocd",project="managed-apps",resource_kind="customresourcedefinitions",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 34
       argocd_app_k8s_request_total{name="monitoring",namespace="argocd",project="managed-apps",resource_kind="monitoring.coreos.com",resource_namespace="",response_code="404",server="https://10.96.0.1:443",verb="Get"} 14
       argocd_app_k8s_request_total{name="monitoring",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="monitoring",namespace="argocd",project="managed-apps",resource_kind="rbac.authorization.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 24
       argocd_app_k8s_request_total{name="opa-gatekeeper",namespace="argocd",project="managed-apps",resource_kind="admissionregistration.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="opa-gatekeeper",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="opa-gatekeeper",namespace="argocd",project="managed-apps",resource_kind="apiextensions.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 4
       argocd_app_k8s_request_total{name="opa-gatekeeper",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="opa-gatekeeper",namespace="argocd",project="managed-apps",resource_kind="customresourcedefinitions",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 6
       argocd_app_k8s_request_total{name="opa-gatekeeper",namespace="argocd",project="managed-apps",resource_kind="monitoring.coreos.com",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="opa-gatekeeper",namespace="argocd",project="managed-apps",resource_kind="rbac.authorization.k8s.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 6
       argocd_app_k8s_request_total{name="opa-gatekeeper",namespace="argocd",project="managed-apps",resource_kind="templates.gatekeeper.sh",resource_namespace="",response_code="404",server="https://10.96.0.1:443",verb="Get"} 8
       argocd_app_k8s_request_total{name="opa-gatekeeper-constraints",namespace="argocd",project="managed-apps",resource_kind="config.gatekeeper.sh",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="opa-gatekeeper-constraints",namespace="argocd",project="managed-apps",resource_kind="constraints.gatekeeper.sh",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 8
       argocd_app_k8s_request_total{name="sonarqube",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 9
       argocd_app_k8s_request_total{name="sonarqube",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="sonarqube",namespace="argocd",project="managed-apps",resource_kind="batch",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="sonarqube",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="tracing",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 2
       argocd_app_k8s_request_total{name="twistlock",namespace="argocd",project="managed-apps",resource_kind="api",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 5
       argocd_app_k8s_request_total{name="twistlock",namespace="argocd",project="managed-apps",resource_kind="apps",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="twistlock",namespace="argocd",project="managed-apps",resource_kind="networking.istio.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 1
       argocd_app_k8s_request_total{name="umbrella-app",namespace="argocd",project="managed-apps",resource_kind="argoproj.io",resource_namespace="",response_code="200",server="https://10.96.0.1:443",verb="Get"} 12918
       # HELP argocd_app_reconcile Application reconciliation performance.
       # TYPE argocd_app_reconcile histogram
       argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="0.25"} 485
       argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="0.5"} 720
       argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="1"} 960
       argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="2"} 1247
       argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="4"} 1306
       argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="8"} 1331
       argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="16"} 1344
       argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="+Inf"} 1360
       argocd_app_reconcile_sum{dest_server="https://kubernetes.default.svc",namespace="argocd"} 1883.5606381550006
       argocd_app_reconcile_count{dest_server="https://kubernetes.default.svc",namespace="argocd"} 1360
       # HELP argocd_app_sync_total Number of application syncs.
       # TYPE argocd_app_sync_total counter
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="ebs",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="eck",namespace="argocd",phase="Succeeded",project="managed-apps"} 62
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="fluentd",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="istio",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="keycloak",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="kiali",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="mattermost",namespace="argocd",phase="Succeeded",project="managed-apps"} 2
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="minio",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="minio-operator",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="monitoring",namespace="argocd",phase="Succeeded",project="managed-apps"} 2
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="opa-gatekeeper",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="opa-gatekeeper-constraints",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       argocd_app_sync_total{dest_server="https://kubernetes.default.svc",name="tracing",namespace="argocd",phase="Succeeded",project="managed-apps"} 1
       # HELP argocd_cluster_api_resource_objects Number of k8s resource objects in the cache.
       # TYPE argocd_cluster_api_resource_objects gauge
       argocd_cluster_api_resource_objects{server="https://10.96.0.1:443"} 1044
       # HELP argocd_cluster_api_resources Number of monitored kubernetes API resources.
       # TYPE argocd_cluster_api_resources gauge
       argocd_cluster_api_resources{server="https://10.96.0.1:443"} 111
       # HELP argocd_cluster_cache_age_seconds Cluster cache age in seconds.
       # TYPE argocd_cluster_cache_age_seconds gauge
       argocd_cluster_cache_age_seconds{server="https://10.96.0.1:443"} 746
       # HELP argocd_cluster_events_total Number of processes k8s resource events.
       # TYPE argocd_cluster_events_total counter
       argocd_cluster_events_total{group="",kind="ConfigMap",server="https://kubernetes.default.svc"} 174
       argocd_cluster_events_total{group="",kind="Endpoints",server="https://kubernetes.default.svc"} 884
       argocd_cluster_events_total{group="",kind="Namespace",server="https://kubernetes.default.svc"} 11
       argocd_cluster_events_total{group="",kind="PersistentVolume",server="https://kubernetes.default.svc"} 24
       argocd_cluster_events_total{group="",kind="PersistentVolumeClaim",server="https://kubernetes.default.svc"} 50
       argocd_cluster_events_total{group="",kind="Pod",server="https://kubernetes.default.svc"} 394
       argocd_cluster_events_total{group="",kind="Secret",server="https://kubernetes.default.svc"} 99
       argocd_cluster_events_total{group="",kind="Service",server="https://kubernetes.default.svc"} 41
       argocd_cluster_events_total{group="",kind="ServiceAccount",server="https://kubernetes.default.svc"} 62
       argocd_cluster_events_total{group="",kind="Status",server="https://kubernetes.default.svc"} 2
       argocd_cluster_events_total{group="admissionregistration.k8s.io",kind="MutatingWebhookConfiguration",server="https://kubernetes.default.svc"} 2
       argocd_cluster_events_total{group="admissionregistration.k8s.io",kind="ValidatingWebhookConfiguration",server="https://kubernetes.default.svc"} 8
       argocd_cluster_events_total{group="apiextensions.k8s.io",kind="CustomResourceDefinition",server="https://kubernetes.default.svc"} 177
       argocd_cluster_events_total{group="apiregistration.k8s.io",kind="APIService",server="https://kubernetes.default.svc"} 27
       argocd_cluster_events_total{group="apps",kind="ControllerRevision",server="https://kubernetes.default.svc"} 9
       argocd_cluster_events_total{group="apps",kind="DaemonSet",server="https://kubernetes.default.svc"} 13
       argocd_cluster_events_total{group="apps",kind="Deployment",server="https://kubernetes.default.svc"} 99
       argocd_cluster_events_total{group="apps",kind="ReplicaSet",server="https://kubernetes.default.svc"} 81
       argocd_cluster_events_total{group="apps",kind="StatefulSet",server="https://kubernetes.default.svc"} 41
       argocd_cluster_events_total{group="argoproj.io",kind="AppProject",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="argoproj.io",kind="Application",server="https://kubernetes.default.svc"} 1621
       argocd_cluster_events_total{group="authentication.istio.io",kind="Policy",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="autoscaling",kind="HorizontalPodAutoscaler",server="https://kubernetes.default.svc"} 99
       argocd_cluster_events_total{group="batch",kind="Job",server="https://kubernetes.default.svc"} 10
       argocd_cluster_events_total{group="config.gatekeeper.sh",kind="Config",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="constraints.gatekeeper.sh",kind="K8sAllowedRepos",server="https://kubernetes.default.svc"} 5
       argocd_cluster_events_total{group="constraints.gatekeeper.sh",kind="K8sContainerLimits",server="https://kubernetes.default.svc"} 5
       argocd_cluster_events_total{group="constraints.gatekeeper.sh",kind="K8sIstioInjection",server="https://kubernetes.default.svc"} 6
       argocd_cluster_events_total{group="constraints.gatekeeper.sh",kind="K8sProtectedNamespaces",server="https://kubernetes.default.svc"} 5
       argocd_cluster_events_total{group="constraints.gatekeeper.sh",kind="K8sPvcLimits",server="https://kubernetes.default.svc"} 6
       argocd_cluster_events_total{group="constraints.gatekeeper.sh",kind="K8sRegulatedResources",server="https://kubernetes.default.svc"} 5
       argocd_cluster_events_total{group="constraints.gatekeeper.sh",kind="K8sRequiredLabels",server="https://kubernetes.default.svc"} 5
       argocd_cluster_events_total{group="constraints.gatekeeper.sh",kind="K8sRequiredProbes",server="https://kubernetes.default.svc"} 5
       argocd_cluster_events_total{group="crd.projectcalico.org",kind="IPAMBlock",server="https://kubernetes.default.svc"} 49
       argocd_cluster_events_total{group="crd.projectcalico.org",kind="IPAMHandle",server="https://kubernetes.default.svc"} 55
       argocd_cluster_events_total{group="elasticsearch.k8s.elastic.co",kind="Elasticsearch",server="https://kubernetes.default.svc"} 15
       argocd_cluster_events_total{group="extensions",kind="Ingress",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="kibana.k8s.elastic.co",kind="Kibana",server="https://kubernetes.default.svc"} 7
       argocd_cluster_events_total{group="mattermost.com",kind="ClusterInstallation",server="https://kubernetes.default.svc"} 5
       argocd_cluster_events_total{group="monitoring.coreos.com",kind="Alertmanager",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="monitoring.coreos.com",kind="Prometheus",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="monitoring.coreos.com",kind="PrometheusRule",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="monitoring.coreos.com",kind="ServiceMonitor",server="https://kubernetes.default.svc"} 16
       argocd_cluster_events_total{group="networking.istio.io",kind="DestinationRule",server="https://kubernetes.default.svc"} 3
       argocd_cluster_events_total{group="networking.istio.io",kind="EnvoyFilter",server="https://kubernetes.default.svc"} 7
       argocd_cluster_events_total{group="networking.istio.io",kind="Gateway",server="https://kubernetes.default.svc"} 3
       argocd_cluster_events_total{group="networking.istio.io",kind="Sidecar",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="networking.istio.io",kind="VirtualService",server="https://kubernetes.default.svc"} 8
       argocd_cluster_events_total{group="networking.k8s.io",kind="Ingress",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="networking.k8s.io",kind="NetworkPolicy",server="https://kubernetes.default.svc"} 3
       argocd_cluster_events_total{group="operator.min.io",kind="MinIOInstance",server="https://kubernetes.default.svc"} 5
       argocd_cluster_events_total{group="policy",kind="PodDisruptionBudget",server="https://kubernetes.default.svc"} 52
       argocd_cluster_events_total{group="rbac.authorization.k8s.io",kind="ClusterRole",server="https://kubernetes.default.svc"} 50
       argocd_cluster_events_total{group="rbac.authorization.k8s.io",kind="ClusterRoleBinding",server="https://kubernetes.default.svc"} 30
       argocd_cluster_events_total{group="rbac.authorization.k8s.io",kind="Role",server="https://kubernetes.default.svc"} 26
       argocd_cluster_events_total{group="rbac.authorization.k8s.io",kind="RoleBinding",server="https://kubernetes.default.svc"} 30
       argocd_cluster_events_total{group="security.istio.io",kind="PeerAuthentication",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="status.gatekeeper.sh",kind="ConstraintPodStatus",server="https://kubernetes.default.svc"} 32
       argocd_cluster_events_total{group="status.gatekeeper.sh",kind="ConstraintTemplatePodStatus",server="https://kubernetes.default.svc"} 32
       argocd_cluster_events_total{group="storage.k8s.io",kind="StorageClass",server="https://kubernetes.default.svc"} 1
       argocd_cluster_events_total{group="templates.gatekeeper.sh",kind="ConstraintTemplate",server="https://kubernetes.default.svc"} 24
       # HELP argocd_cluster_info Information about cluster.
       # TYPE argocd_cluster_info gauge
       argocd_cluster_info{k8s_version="1.17",server="https://10.96.0.1:443"} 1
       # HELP argocd_kubectl_exec_pending Number of pending kubectl executions
       # TYPE argocd_kubectl_exec_pending gauge
       argocd_kubectl_exec_pending{command="apply"} 12
       argocd_kubectl_exec_pending{command="auth"} 0
       # HELP argocd_kubectl_exec_total Number of kubectl executions
       # TYPE argocd_kubectl_exec_total counter
       argocd_kubectl_exec_total{command="apply"} 920
       argocd_kubectl_exec_total{command="auth"} 124
       # HELP argocd_redis_request_duration Redis requests duration.
       # TYPE argocd_redis_request_duration histogram
       argocd_redis_request_duration_bucket{initiator="argocd-application-controller",le="0.01"} 1775
       argocd_redis_request_duration_bucket{initiator="argocd-application-controller",le="0.05"} 2576
       argocd_redis_request_duration_bucket{initiator="argocd-application-controller",le="0.1"} 2664
       argocd_redis_request_duration_bucket{initiator="argocd-application-controller",le="0.25"} 2706
       argocd_redis_request_duration_bucket{initiator="argocd-application-controller",le="0.5"} 2718
       argocd_redis_request_duration_bucket{initiator="argocd-application-controller",le="1"} 2720
       argocd_redis_request_duration_bucket{initiator="argocd-application-controller",le="+Inf"} 2720
       argocd_redis_request_duration_sum{initiator="argocd-application-controller"} 40.226102580000095
       argocd_redis_request_duration_count{initiator="argocd-application-controller"} 2720
       # HELP argocd_redis_request_total Number of kubernetes requests executed during application reconciliation.
       # TYPE argocd_redis_request_total counter
       argocd_redis_request_total{failed="false",initiator="argocd-application-controller"} 2720
       # HELP go_gc_duration_seconds A summary of the GC invocation durations.
       # TYPE go_gc_duration_seconds summary
       go_gc_duration_seconds{quantile="0"} 6.5319e-05
       go_gc_duration_seconds{quantile="0.25"} 0.000207323
       go_gc_duration_seconds{quantile="0.5"} 0.000718915
       go_gc_duration_seconds{quantile="0.75"} 0.001768695
       go_gc_duration_seconds{quantile="1"} 0.064644408
       go_gc_duration_seconds_sum 2.5758904400000002
       go_gc_duration_seconds_count 1359
       # HELP go_goroutines Number of goroutines that currently exist.
       # TYPE go_goroutines gauge
       go_goroutines 588
       # HELP go_info Information about the Go environment.
       # TYPE go_info gauge
       go_info{version="go1.14.1"} 1
       # HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
       # TYPE go_memstats_alloc_bytes gauge
       go_memstats_alloc_bytes 8.38324456e+08
       # HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
       # TYPE go_memstats_alloc_bytes_total counter
       go_memstats_alloc_bytes_total 1.13845253112e+11
       # HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
       # TYPE go_memstats_buck_hash_sys_bytes gauge
       go_memstats_buck_hash_sys_bytes 7.179126e+06
       # HELP go_memstats_frees_total Total number of frees.
       # TYPE go_memstats_frees_total counter
       go_memstats_frees_total 5.5322309e+08
       # HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
       # TYPE go_memstats_gc_cpu_fraction gauge
       go_memstats_gc_cpu_fraction 0.04610715534136573
       # HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
       # TYPE go_memstats_gc_sys_bytes gauge
       go_memstats_gc_sys_bytes 5.3211568e+07
       # HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
       # TYPE go_memstats_heap_alloc_bytes gauge
       go_memstats_heap_alloc_bytes 8.38324456e+08
       # HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
       # TYPE go_memstats_heap_idle_bytes gauge
       go_memstats_heap_idle_bytes 6.16792064e+08
       # HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
       # TYPE go_memstats_heap_inuse_bytes gauge
       go_memstats_heap_inuse_bytes 8.53966848e+08
       # HELP go_memstats_heap_objects Number of allocated objects.
       # TYPE go_memstats_heap_objects gauge
       go_memstats_heap_objects 4.720945e+06
       # HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
       # TYPE go_memstats_heap_released_bytes gauge
       go_memstats_heap_released_bytes 8.76544e+06
       # HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
       # TYPE go_memstats_heap_sys_bytes gauge
       go_memstats_heap_sys_bytes 1.470758912e+09
       # HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
       # TYPE go_memstats_last_gc_time_seconds gauge
       go_memstats_last_gc_time_seconds 1.6001027575429218e+09
       # HELP go_memstats_lookups_total Total number of pointer lookups.
       # TYPE go_memstats_lookups_total counter
       go_memstats_lookups_total 0
       # HELP go_memstats_mallocs_total Total number of mallocs.
       # TYPE go_memstats_mallocs_total counter
       go_memstats_mallocs_total 5.57944035e+08
       # HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
       # TYPE go_memstats_mcache_inuse_bytes gauge
       go_memstats_mcache_inuse_bytes 6944
       # HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
       # TYPE go_memstats_mcache_sys_bytes gauge
       go_memstats_mcache_sys_bytes 16384
       # HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
       # TYPE go_memstats_mspan_inuse_bytes gauge
       go_memstats_mspan_inuse_bytes 6.104088e+06
       # HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
       # TYPE go_memstats_mspan_sys_bytes gauge
       go_memstats_mspan_sys_bytes 7.585792e+06
       # HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
       # TYPE go_memstats_next_gc_bytes gauge
       go_memstats_next_gc_bytes 5.26721792e+08
       # HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
       # TYPE go_memstats_other_sys_bytes gauge
       go_memstats_other_sys_bytes 1.606786e+06
       # HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
       # TYPE go_memstats_stack_inuse_bytes gauge
       go_memstats_stack_inuse_bytes 5.537792e+06
       # HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
       # TYPE go_memstats_stack_sys_bytes gauge
       go_memstats_stack_sys_bytes 5.537792e+06
       # HELP go_memstats_sys_bytes Number of bytes obtained from system.
       # TYPE go_memstats_sys_bytes gauge
       go_memstats_sys_bytes 1.54589636e+09
       # HELP go_threads Number of OS threads created.
       # TYPE go_threads gauge
       go_threads 29
       # HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
       # TYPE process_cpu_seconds_total counter
       process_cpu_seconds_total 1140.18
       # HELP process_max_fds Maximum number of open file descriptors.
       # TYPE process_max_fds gauge
       process_max_fds 1.048576e+06
       # HELP process_open_fds Number of open file descriptors.
       # TYPE process_open_fds gauge
       process_open_fds 152
       # HELP process_resident_memory_bytes Resident memory size in bytes.
       # TYPE process_resident_memory_bytes gauge
       process_resident_memory_bytes 1.55029504e+09
       # HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
       # TYPE process_start_time_seconds gauge
       process_start_time_seconds 1.60010200963e+09
       # HELP process_virtual_memory_bytes Virtual memory size in bytes.
       # TYPE process_virtual_memory_bytes gauge
       process_virtual_memory_bytes 2.24227328e+09
       # HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
       # TYPE process_virtual_memory_max_bytes gauge
       process_virtual_memory_max_bytes -1
       # HELP workqueue_adds_total Total number of adds handled by workqueue
       # TYPE workqueue_adds_total counter
       workqueue_adds_total{name="app_operation_processing_queue"} 1467
       workqueue_adds_total{name="app_reconciliation_queue"} 2341
       # HELP workqueue_depth Current depth of workqueue
       # TYPE workqueue_depth gauge
       workqueue_depth{name="app_operation_processing_queue"} 5
       workqueue_depth{name="app_reconciliation_queue"} 7
       # HELP workqueue_longest_running_processor_seconds How many seconds has the longest running processor for workqueue been running.
       # TYPE workqueue_longest_running_processor_seconds gauge
       workqueue_longest_running_processor_seconds{name="app_operation_processing_queue"} 208.974151
       workqueue_longest_running_processor_seconds{name="app_reconciliation_queue"} 101.610978
       # HELP workqueue_queue_duration_seconds How long in seconds an item stays in workqueue before being requested.
       # TYPE workqueue_queue_duration_seconds histogram
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="1e-08"} 0
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="1e-07"} 0
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="1e-06"} 0
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="9.999999999999999e-06"} 1079
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="9.999999999999999e-05"} 1160
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="0.001"} 1168
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="0.01"} 1180
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="0.1"} 1270
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="1"} 1389
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="10"} 1450
       workqueue_queue_duration_seconds_bucket{name="app_operation_processing_queue",le="+Inf"} 1462
       workqueue_queue_duration_seconds_sum{name="app_operation_processing_queue"} 506.46889550700035
       workqueue_queue_duration_seconds_count{name="app_operation_processing_queue"} 1462
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="1e-08"} 0
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="1e-07"} 0
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="1e-06"} 0
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="9.999999999999999e-06"} 589
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="9.999999999999999e-05"} 1060
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="0.001"} 1376
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="0.01"} 1549
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="0.1"} 1747
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="1"} 2142
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="10"} 2323
       workqueue_queue_duration_seconds_bucket{name="app_reconciliation_queue",le="+Inf"} 2334
       workqueue_queue_duration_seconds_sum{name="app_reconciliation_queue"} 1156.8047681869998
       workqueue_queue_duration_seconds_count{name="app_reconciliation_queue"} 2334
       # HELP workqueue_retries_total Total number of retries handled by workqueue
       # TYPE workqueue_retries_total counter
       workqueue_retries_total{name="app_operation_processing_queue"} 0
       workqueue_retries_total{name="app_reconciliation_queue"} 0
       # HELP workqueue_unfinished_work_seconds How many seconds of work has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases.
       # TYPE workqueue_unfinished_work_seconds gauge
       workqueue_unfinished_work_seconds{name="app_operation_processing_queue"} 248.426914
       workqueue_unfinished_work_seconds{name="app_reconciliation_queue"} 231.685737
       # HELP workqueue_work_duration_seconds How long in seconds processing an item from workqueue takes.
       # TYPE workqueue_work_duration_seconds histogram
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="1e-08"} 0
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="1e-07"} 0
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="1e-06"} 1
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="9.999999999999999e-06"} 741
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="9.999999999999999e-05"} 752
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="0.001"} 753
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="0.01"} 753
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="0.1"} 848
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="1"} 1347
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="10"} 1444
       workqueue_work_duration_seconds_bucket{name="app_operation_processing_queue",le="+Inf"} 1457
       workqueue_work_duration_seconds_sum{name="app_operation_processing_queue"} 718.2207284010001
       workqueue_work_duration_seconds_count{name="app_operation_processing_queue"} 1457
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="1e-08"} 0
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="1e-07"} 0
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="1e-06"} 0
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="9.999999999999999e-06"} 28
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="9.999999999999999e-05"} 937
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="0.001"} 962
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="0.01"} 966
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="0.1"} 1128
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="1"} 1927
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="10"} 2302
       workqueue_work_duration_seconds_bucket{name="app_reconciliation_queue",le="+Inf"} 2327
       workqueue_work_duration_seconds_sum{name="app_reconciliation_queue"} 1884.5912232190005
       workqueue_work_duration_seconds_count{name="app_reconciliation_queue"} 2327
       ```


- Useful queries
  * argocd_app_info{health_status="Healthy"}
  * argocd_app_info{sync_status="Synced"}
  * argocd_git_request_total{request_type="fetch"}
  * argocd_app_sync_total{dest_server="https://kubernetes.default.svc",project="managed-apps"}
