import * as bitbucketTags from './bitbucket-tags';
import { CdnJsDatasource } from './cdnjs';
import { ClojureDatasource } from './clojure';
import * as crate from './crate';
import * as dart from './dart';
import * as docker from './docker';
import * as galaxy from './galaxy';
import * as gitRefs from './git-refs';
import * as gitTags from './git-tags';
import * as githubReleases from './github-releases';
import * as githubTags from './github-tags';
import * as gitlabTags from './gitlab-tags';
import * as go from './go';
import * as gradleVersion from './gradle-version';
import * as helm from './helm';
import * as hex from './hex';
import * as jenkinsPlugins from './jenkins-plugins';
import * as maven from './maven';
import * as npm from './npm';
import * as nuget from './nuget';
import * as orb from './orb';
import * as packagist from './packagist';
import * as pod from './pod';
import * as pypi from './pypi';
import * as repology from './repology';
import * as rubyVersion from './ruby-version';
import * as rubygems from './rubygems';
import * as sbtPackage from './sbt-package';
import * as sbtPlugin from './sbt-plugin';
import * as terraformModule from './terraform-module';
import * as terraformProvider from './terraform-provider';
import type { DatasourceApi } from './types';

const api = new Map<string, DatasourceApi>();
export default api;

api.set('bitbucket-tags', bitbucketTags);
api.set('cdnjs', new CdnJsDatasource());
api.set('clojure', new ClojureDatasource());
api.set('crate', crate);
api.set('dart', dart);
api.set('docker', docker);
api.set('galaxy', galaxy);
api.set('git-refs', gitRefs);
api.set('git-tags', gitTags);
api.set('github-releases', githubReleases);
api.set('github-tags', githubTags);
api.set('gitlab-tags', gitlabTags);
api.set('go', go);
api.set('gradle-version', gradleVersion);
api.set('helm', helm);
api.set('hex', hex);
api.set('jenkins-plugins', jenkinsPlugins);
api.set('maven', maven);
api.set('npm', npm);
api.set('nuget', nuget);
api.set('orb', orb);
api.set('packagist', packagist);
api.set('pod', pod);
api.set('pypi', pypi);
api.set('repology', repology);
api.set('ruby-version', rubyVersion);
api.set('rubygems', rubygems);
api.set('sbt-package', sbtPackage);
api.set('sbt-plugin', sbtPlugin);
api.set('terraform-module', terraformModule);
api.set('terraform-provider', terraformProvider);
